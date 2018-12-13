import { login } from '../controller/user/login.js'
var router = require('koa-router')({prefix: '/api'});
router.post('/login', login)
module.exports = router