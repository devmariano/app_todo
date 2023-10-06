//mock de dev users e todo

const users = [
  {
    id: 1,
    name: "Administrador",
    email: "admin@todoapp.com.br",
    password: "admin123",
  },
  {
    id: 2,
    name: "Alex",
    email: "alex@todoapp.com.br",
    password: "alex123",
  },
];

const todos = [
  {
    id: 1,
    title: "Comprar mantimentos",
    description: "Compre leite, ovos, pão e frutas no supermercado.",
    completed: false,
  },
  {
    id: 2,
    title: "Reunião de trabalho",
    description: "Participe da reunião de equipe às 10h para discutir o projeto.",
    completed: true,
  },
  {
    id: 3,
    title: "Fazer exercícios",
    description: "Faça 30 minutos de exercícios aeróbicos e 15 minutos de musculação.",
    completed: true,
  },
  {
    id: 4,
    title: "Ler um livro",
    description: "Leia o novo livro de ficção científica que comprou na livraria.",
    completed: false,
  },
  {
    id: 5,
    title: "Assistir a um filme",
    description: "Assista ao último lançamento de filme no streaming.",
    completed: true,
  },
];

require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors({
  // origin: 'http://localhost:5173/',
  origin: '*',
}))
server.use(express.json());

server.get("/", (request, response) => {
  response.status(200).json({
    message: `Hello World, ${process.env.APP_NAME}`,
  });
});

server.post("/auth", (request, response) => {
  const { body } = request;

  //se não existir email nem password
  const emptyData = !body?.email || !body?.password;

  if (emptyData) {
    return response.status(400).json({
      message: "Os dados do formulario são obrigatorios",
      data: null,
      success: false,
    });
  }

  const user = users.find((item) => item.email === body.email);

  if (!user) {
    return response.status(404).json({
      message: `Não foi possivel autenticar`,
      data: null,
      success: false,
    });
  }

  const isPasswordValid = user.password === body.password;

  const token =
    isPasswordValid &&
    jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.APP_SECRET,
      {
        expiresIn: "1h",
      }
    );

  return response.status(!isPasswordValid ? 401 : 200).json({
    message: isPasswordValid
      ? `Usuário ${user.email} foi autenticado com sucesso.`
      : `Não foi possivel autenticar, usuário ou senha inválido`,
    success: isPasswordValid,
    data: isPasswordValid ? token : null,
  });
});

//fim da autenticação e inicio dos endpoints todo

server.get("/todos", (request, response) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      data: null,
      message: "E necessario gerar um token para acessar o recurso",
      success: false,
    });
  }

  jwt.verify(
    authorization.replace("Bearer ", ""),
    process.env.APP_SECRET,
    (err, decoded) => {
      //decodec não é necessario mas tras info do usuario autenticado
      console.log(decoded)
      return err
        ? response.status(500).json({
            success: false,
            message: "Token invalido",
            data: null,
          })
        : response.status(200).json({
            message: `Foram encontrados ${todos.length} tarefas`,
            data: todos,
            success: true,
          });
    }
  );
});

module.exports = {
  server,
};
