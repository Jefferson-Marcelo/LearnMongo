const mongoose = require("mongoose")

//Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("MongoDB conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+err )
})

// Model - Usuários
//Definindo um model
const userSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true,
    },
    sobrenome:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type:String
    }
})

//Colletion
    mongoose.model('usuarios', userSchema)

let user1 = mongoose.model('usuarios') 

new user1({
    nome: "Jefferson",
    sobrenome: "Marcelo",
    idade: 31,
    email: "jeffersonmarcelo_os@hotmail.com",
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuário: "+err )
})