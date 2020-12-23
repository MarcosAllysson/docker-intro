var mongoose = require('mongoose');
require('dotenv').config();
var util = require('util');

// Setando variáveis de ambiente
var db_user = process.env.DATABASE_USER;
var db_pass = process.env.DATABASE_PASSWORD;
var db_host_name = process.env.DATABASE_HOST_NAME;
var db_port = process.env.DATABASE_PORT;

const DB_CONFIG = util.format('mongodb://%s:%s@%s:%s', db_user, db_pass, db_host_name, db_port);

mongoose.connect(DB_CONFIG, {useNewUrlParser: true}, (err) => {
    console.log('Mongodb conectado', err);
});

const users = mongoose.model('users',{
    name: String
});

var newUser = new users({name:'User user'});
newUser.save();

module.exports = { users };