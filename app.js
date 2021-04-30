const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const HomeRouter = require('./routers/home.router')
const PostRouter  = require('./routers/post.routes');

const client =require('./dal')

//creating koa application
const app = new Koa();

//using koa body parser
app.use(bodyparser() );

app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

app.use(ctx => {
    ctx.body = 'Hello ';
});

app.listen(3000,err => {
    if(err){
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});


