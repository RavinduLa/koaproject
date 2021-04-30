const client = require('./');

const posts = require('./').db('posts').collection('posts');

const save = async ({id,name,description,postedDate}) => {
    const posts = client.db('posts').collection('posts');
    const result = await posts.insertOne({id,name,description,postedDate});
    return result.ops[0];
}

const getAll  = async () => {
    console.log('getting all posts to cursor');
    /*const cursor = await  posts.find().toArray( function (err,result){
        if(err) throw err;
        console.log(result);
    });*/

    const cursor  = await posts.find();

    return cursor.toArray();
};

const getById = async (id) => {
    return await posts.findOne({id});
}

module.exports = {save,getAll,getById};