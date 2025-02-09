// function getuser(callback){
    

//     let users = [{name: "Danish"},{name: "Shivam"}]
//     console.log(users);
//     callback(users);
// }

//  console.log("before ");
 


// console.log("after the call");

// function getpost(user,callback){

//     let post = [{title: "holiday"},{title:"Nice Day" }]
//     callback(post);
// }
// // this is inside callback inside call back and inside callback this is called as the callback hell

// setTimeout(function(){
//      getuser(function(users){
//        setTimeout(() => {
//           getpost(users[0],function(posts){
//                console.log("call");
               
//           })
//        }, 0);
//      });
  

// }, 0);

// ###################################################################
/* from here we will learn the promises and */

// Promises are simple object which has executor function function which will either resolve or reject 



// async function getusers(){ // adding the keyword async the function becoms asynchronus
//     const prom = new Promise(function(resolve,reject){
//         let users = [{name: "danish"}, {name: "Shivam"}]
//         if(users.length>0){
//             resolve(users);
//         }
//         else{
//             reject("Not data");
//         }
//     })

//     return prom;
// }
// // the whole function inside the asyc becoms asynchronus function
// async function getpost(user){
//     const prom = new Promise(function(resolve,reject){

//         let posts = [{title: "holiday"},{title:"Nice Day" }];
//         if(posts.length >0){
//             resolve(posts);
//         }else{
//             reject("Error :: ");
//         }
//     })
//     return prom;
// }


// // ################# then and catch ########### ######## ##########
  



// getusers()
// .then(function(users){
// console.log(users);

//  return getpost(users[0]) // rather than handling inside now I can handle outside of the then block and i need to write only once catch
// //   .then(function(posts){
// //   })
// //   .catch(function(err){
// //      console.log(err);
     
// //   })
// })
// .then(function(posts){
//     console.log(posts);
// })
// .catch(function(err){
//  console.log(err);
//  })



function doSome(){
         return new Promise(function(resolve,reject){
            if(true){
                resolve("Danish bhai")

            }
            else {
                reject("some error")
            }
         })
}
doSome()
.then(function(data){
    console.log(data);
})
.catch(function(err){

})
 
// first all the synchronus task is executed then after this microtask queue is axecuted then at the last of the program the call back queue is executed 
// first sychronus task 
// microtask uqeueu
// calback queue
// only writing promise does not make our code async we have to use the keyword async;
// promises are made to handle the async task

/*
fetch("https://jsonplaceholder.typicode.com/posts") // this is the most used technology that is Fetching api and returning the promises 
.then((Response)=>{
  return Response.json();
})
.then((Response)=>{
    console.log(Response);
  })
.catch((err)=>{
    console.log(err);
})
*/

// the oth


// the whole function is async but the function insside itself is synchronus 
async function handleFetch(){
  try{let Response =   await fetch("https://jsonplaceholder.typicode.com/posts")

    let data = await Response.json() // these two lines will be execyted synchronusly 
    // while the whole function is asynchronus

    console.log(data);
    }
    catch(err){
        console.log(err);
        
    }
}

// async can be used every where but await can only be used inside the async function

handleFetch();



