const post=[];

function createPost(){
    return new Promise((resolve,reject)=>{
        var posts=post.push({title:'first post',body:'first post is created'});
        resolve(posts);
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        if(post.length>0){
            var deleted=post.pop();
            resolve(deleted);
        }else{
            reject("Empty post");
        }
    })
}

function posttime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const time = new Date().getTime();
            resolve(time);
        },1000)
    })
}

// createPost().then(()=>{
//         deletePost().then((msg)=>{
//             console.log(msg);
//             deletePost().catch((err)=>{
//                 console.log(err);
//             });
//         })
//     });
Promise.all([createPost(),posttime(),deletePost(),deletePost()]).then((values)=>
    console.log(values)).catch(err=>console.log(err));
