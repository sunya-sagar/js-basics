// callback hell

function getUser(id, callback) {
	setTimeout(() => {
		console.log("Fetching user data for id", id);
		callback(null, { id: id, name: "John Doe" });
	}, 1000);
}

function getUsersPosts(userId, callback) {
	setTimeout(() => {
		console.log("Fetching post for user with id", userId);
		callback(null, [
			{ id: 1, content: "Post 1" },
			{ is: 2, content: "post 2" },
		]);
	}, 1000);
}

function getComments(postId, callback) {
	setTimeout(() => {
		console.log("Fetching Comments for post with Id", postId);
		callback(null, [
			{ id: 1, comment: "Comment 1" },
			{ id: 2, comment: "Comment 2" },
		]);
	}, 1000);
}

// // Simulating a sequence of asynchronous operations using callbacks
getUser(1,function(err,user){
    if(err){
        console.log('Error fetching User',err)
    }else{
        getUsersPosts(user.id,function(err,posts){
            if(err){
                console.log("error fetching post ",err)
            }else{
                getComments(posts[0].id,function(err,comments){
                    if(err){
                        console.log('Error fetching comments',err)
                    }else{
                        console.log('Comments for post 1',comments)
                    }
                })
            }
        })
    }
})


// solving this with promise 

function getUser (id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Fetching user for id',id)
            resolve({id:1,name:'John Doe'})
        },1000)
    })

}

function getComments (postId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Fetching Comments for post id',postId)
            // resolve([
            //     {
            //         id:1,
            //         comment:'Comment 1'
            //     },
            //     {
            //         id:2,
            //         comment:'Comment 2'
            //     }
            // ])
            reject({error:true,message:`Can not found comments for post with ${postId}`})
        },1000)

    })

}

function getPosts(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Fetching posts for user with id',userId)
            resolve([
                {
                    id:1,
                    content:'Post 1',
                    
                },
                {
                    id:2,
                    content:'Post 2'
                }
            ])
        },1000)
    })
}

getUser(1).then(user => {
    return getPosts(user.id);
})
.then(posts => getComments(posts[0].id))
.then(comments => console.log("Comments for post with id 1",comments))
.catch(err => console.log('An Error occurred',err))

// with async await 


async function fetchComments (){
    try{
        const user = await getUser(1);
        const posts = await getPosts(user?.id);
        const comments = await getComments(posts[1].id)
        console.log('Comments for post 2', comments )

    }catch(err){
        console.log('error occurred',err)
    }
}

fetchComments()


// Async function to run all the operations in parallel
async function fetchDataInParallel() {
    try {
        // Start all operations in parallel
        const userPromise = getUser(1);
        const postsPromise = getPosts(1);
        const commentsPromise = getComments(1);

        // Wait for all promises to resolve concurrently
        const [user, posts, comments] = await Promise.all([userPromise, postsPromise, commentsPromise]);

        console.log('User:', user);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    } catch (error) {
        console.error('An error occurred:', error);  // Centralized error handling
    }
}

fetchDataInParallel();