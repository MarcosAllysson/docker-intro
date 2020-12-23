var express = require('express');
const bodyParser = require('body-parser');
const UserRouter = express.Router();
const { users } = require ('./settings');
const { json } = require('body-parser');


// Rotas
app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.send('Opa, funciona :D');
});

// Criando usuário
app.post('/create', function(req, res) {
    console.log(req.body.name);
    var newUser = new users({name: req.body.name});
    newUser.save();
    res.send("Usuário novo criado...");
});


// Listar todos os usuários
app.get('/users', function(req,res) {
    users.find({}, function (err, users){
        res.send(users);
    });
});

// Iniciando servidor
app.listen(8080, function () {
  console.log('Servidor de pé e rodando na porta 8080!');
});