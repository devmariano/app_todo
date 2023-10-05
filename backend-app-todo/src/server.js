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

require('dotenv').config();
const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (request,response) =>{
    response.status(200).json({
        message: `Hello World, ${process.env.APP_NAME}`
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
    
    if (!user){
      return response.status(404).json({
        message: `Não foi possivel autenticar`,
        data: null,
        success: false,
      });
    }

    const isPasswordValid = user.password === body.password;

    return response.status(!isPasswordValid ? 403 : 200).json({
      message: isPasswordValid
              ? `Usuário ${user.email} foi autenticado com sucesso.` 
              : `Não foi possivel autenticar, usuário ou senha inválido`,
      success: isPasswordValid,
      data: isPasswordValid ? user : null,
    });
});

module.exports = {
    server,
}