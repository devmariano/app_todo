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


    return response.status(emptyData ? 400 : 200).json({
      Message: !emptyData
              ? `Usuário ${body.email} foi autenticado com sucesso.` 
              : `Não foi possivel autenticar, usuário ou senha inválido`,
      success: !emptyData,
      data: !emptyData ? body : null
    })

    //para teste e post no insomnia
    //response.status(200).json(body);
});

module.exports = {
    server,
}