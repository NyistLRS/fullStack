var models = require('../db');
var mysql = require('mysql');
var $sql = require('../sql')
var conn = mysql.createConnection(models.mysql)
conn.connect();

export function login(){

}