import model  from '../controller'
const router = require('koa-router')({
    prefix: '/api'
});
router.post('/add', model.login)
module.exports = router