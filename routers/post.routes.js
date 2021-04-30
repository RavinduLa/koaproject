const Router = require('@koa/router'),
    {createPost, getPosts, getPost,} = require('../api/posts.api');


const router = new Router({
    prefix: '/posts'
});
router.get('/', async ctx => { //need the async to work!!!
    ctx.body = await getPosts();
});
router.post('/', async ctx => {
    let post = ctx.request.body;
    console.log('Calling create post name: '+post.name)
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPost(id);
});

router.delete('/',ctx => {

})

module.exports = router;
