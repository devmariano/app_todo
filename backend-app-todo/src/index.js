require('dotenv').config();
const { server } = require("./server");

server.listen(process.env.APP_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.APP_PORT}`)
})