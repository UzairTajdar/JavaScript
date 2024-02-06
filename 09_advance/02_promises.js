// =================Promise One==================
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Primise is created ')
//         resolve();
//     },1000)
// })

// promiseOne.then(function () {
//     console.log('Promise is consumed');
// })

// =================Promise Two==================
// new Promise(function(resolve,reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Primise is created again')
//         resolve();
//     },1000)
// }).then(function () {
//     console.log('Promise is consumed again');
// })

// =================Promise Three==================
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         resolve({username:"Uzair" , email: "uzair@gmail.com"})
//     },1000)
// })

// promiseThree.then(function (user) {
//     console.log(user)
// })
// =================Promise Four==================
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function () {
        const error = false;
        if (!error) {
            resolve({username:"Uzair" , email: "uzair@gmail.com"})
        }else{
            reject('Error : Something wrong')
        }
    },1000)
})

promiseFour.then(function (user) {
    console.log(user)
    return user.username
}).then(function (username) {
    console.log(username)
}).catch(function (error) {
    console.log(error)
})