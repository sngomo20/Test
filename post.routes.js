// Getting all post 
const {post} = require("./index.routes");  
const router = require ("./index.routes");

router.get('/', async (req, res)=>{
    await post.getpost().then(
        posts=> res.json(posts)
    ).catch(
        err=> {
            if(err){
            res.json({
                message:"Sorry there is an error",
                status:202
            })
        }
})
});


//Getting post by one id
router.get('/id', async(req, res)=>{

    const id = req.params.id
    await post.getpost(id).then(
        post=> res.json(post)
    ).catch(
        err=>{
            if(err){
                res.json({message:"Sorry check again"})
            }
        }
    )
})


// Inserting post
router.post('/', async(req, res) => 
{
    await post.insertpost(req.body)
    .then(post => res.json({
        message: "The post #${post.id} has been created",
        content: post
    }))
    .catch(err => res.json({message : err.message}))
})


//Updating post
router.put('/id', async (req, res) => 
{
    const id = req.params.id

    await post.updatepost(id, req.body)
    .then(post => res.json({
        message: "Post #${id} has been updated",
        content: post
    }))
    .catch(err =>
        {
            if(err){
                res.json({message: err.message})
            }
            res.status(500).json({message: err.message})
        })
}) 


//Delete a post
router.delete('/id', async (req,res)=> 
{
    const id= req.params.id

    await post.deletepost(id)
    .then(post => res.json({
        message : "The post #${id} has been deleted"
    }))
    .catch(err => {
        if (err){
            res.json({message : err.message})
        }
        res.status(500).json({message: err.message})
    })
})



