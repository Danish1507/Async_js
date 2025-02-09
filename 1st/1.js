function dosomething(name)
{
    console.log("HEllo everyone !!");
    name();
}

// dosomething("danish"); // if execute this line of code then the parameter type will be string and we will not be able to pass the function as a arguement

// we can pass anyting inside of the parameter even a function 

function demo(){
     console.log("I am a demo function: ");
}

dosomething(demo);

// while passing a fucntion do not use paranthesis when we use paranthesis this means we are calling the fucntion;

// we can directly create a function as a parameter
// like below
dosomething(function(){
    console.log("this is a function as a parameter");
    
 });


 // the function we pass as a arguement to another funciton is called as a callback fucntion

/* when we pass a function as a argment then these functions are called as call back function */

// we can pass n number of fucntion as a arguement
// callback is a fucntion which we pass as a arguement to other funtion


function getuserdata(task){

    let data = [23,25,90];
    task(data); // calling back the call back function
}

getuserdata(function(data){
    console.log(data);
});
 

// we can use the user data form the funciton from the get userdata for multiple <purpose

// javascript is a single threaded language it execute code one by one 
 
// settimeout and settimer and set intervals are executed searately in the browser 
// this feature we use for async task 

setTimeout(function() {  // this is the one way of creatig the async function;
    console.log("async task takes time");
    
}, 5000);
console.log("this line is after the timeout function");

// callback queue
// event loop it continuously check for the callback queue
// event loop will check for the call back queue only after the execution of the synchronus task

