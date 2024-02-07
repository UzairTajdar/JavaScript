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
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         const error = false;
//         if (!error) {
//             resolve({username:"Uzair" , email: "uzair@gmail.com"})
//         }else{
//             reject('Error : Something wrong')
//         }
//     },1000)
// })

// promiseFour.then(function (user) {
//     console.log(user)
//     return user.username
// }).then(function (username) {
//     console.log(username)
// }).catch(function (error) {
//     console.log(error)
// }).finally(()=> console.log('The finally() is executed .The promise is either resolved or rejected '))


// =================Promise Five==================
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({username:"Javascript" , email: "Java@gmail.com"})
//         }else{
//             reject('Error : Js Something wrong')
//         }
//     },1000)
// })

// async function consumedFive(){
//    try {
//     const response = await promiseFive
//     console.log(response)
//    } catch (error) {
//     console.log(error)
//    }
// }
// consumedFive()


// ======================Fetch Method=============================
// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data  = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log('E :',error)
//     }
// }
// getAllUser()


// ======================Fetch Method=============================
// fetch('https://api.github.com/users/uzairtajdar')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=> console.log(error))


// ================ Promise.all()================
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
                const error = false;
                if (!error) {
                    resolve({username:"Uzair" , email: "uzair@gmail.com"})
                }else{
                    reject('Error : Something wrong')
                }
            },1000)
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});