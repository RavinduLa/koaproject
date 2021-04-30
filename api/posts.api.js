const uuid = require('uuid');

//const posts = new Map();

const {save,getAll,getById} = require('../dal/posts.dao');

const createPost = async ({name, description}) =>  {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }

    console.log('Running create post'+ name)

    return await save(post);
    /*posts.set(post.id, post);

    console.log(posts);
    return post;*/
}

const getPosts = async () => {
    console.log('returning all posts')
    return await getAll();
    //return [...posts.values()];
}

const getPost = async (id) => {
    return await getById(id);
}

/*module.exports = createPost;
module.exports = getPost;
module.exports = getPosts;*/

module.exports = {
    createPost,
    getPosts,
    getPost
}
