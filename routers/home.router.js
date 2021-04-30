const Router = require('@koa/router');

const router = new Router({
    prefix: '/home'
});
router.get('/', ctx => {
    ctx.body = 'Hello World Home';
});
router.post('/', ctx => {
    ctx.body = 'Hello World Home';
});

module.exports = router;
//export default router;