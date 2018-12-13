const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser')();
//const router = require('koa-router')();
const router = require('./router/router.js')
app.use(bodyparser)
//app.use(login)
app.use(router.routes());
app.listen(3004);
console.log('you appliction apply on prot 3002,you can click http://192.168.40.110:3002')