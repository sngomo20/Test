let posts = require(filename);



const getposts= ()=> {
// ALL POSTS
//array is null?
//If else
    return new Promise((resolve, reject)=>{
        // BL
        if (posts.length === 0){
            //Reject
            reject({
                message: "Sorry, no posts availaible to display!!",
                status: 202
            })
        }else{
            //resolve
            resolve(posts)
        }
    })
}

const getpost = (id)=> {
//One particular post
//Index of element by traversing through the array
//similar code logic array.find (r.id== id)
return  Promise((resolve,reject)=> {
                helpers.mustBeInArray(posts,id)
                .then(posts=>resolve(post))
                .catch(err=> reject(err))
}) 
}

const insertpost = (newPost)=> {
//insert
//array.push -> Id should be unique -> getNewId
return new Promise ((resolve, reject)=> {
    //ID
    const id = {id: helpers.getNewId(posts)};

    //Dates
    const date = {
        createAt: helpers.getDate(),
        UpdateAt: helpers.getDate()
    }

    newPost = {...id, ...date, ...newPost}

    posts.push(newPost)

    helpers.writeJSONFILE(filename, posts);
    resolve(newPost, 200);

})

}

const updatepost = (id, newPost)=> {
    //update
    //Index of the element
    // replace element

    return new Promise ((resolve,reject)=> {
        helper.mustBeInArray(posts, id)
        .then(post => {
            // Index of element
            const index = posts.findIndex(p=> p.id==post.id)

            id = {id: post.id}

            const date= {
                createdAt: post.createAt,
                updatedAt: helpers.getDate()
            }

            //Replace element
            posts[index]= {...id, ...date, ...newPost}
            helper.writeJSONFILE(filename,posts)
            resolve(posts[index])
        })
        .catch(err=>reject(err))
    })



}

const deletepost = (id) => {
//delete
//index of element
//delete element

return new Promise((resolve,reject) => {
    helpers.mustBeInArray(posts, id)
    .then(
        () =>{
            posts = posts.filter(p=> p.id !==post.id);
            helper.writeJSONFILE(filename, posts);
            resolve()
        }

    )
    .catch(err => reject(err))
})


};