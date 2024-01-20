//================ Date ==================

const date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toTimeString());

const myDate =new Date();
// console.log(myDate.getMonth());

// console.log(myDate.getHours());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.getTime());                     //in miliseconds
// console.log(Math.floor(myCreatedDate.getTime())/1000);    //in seconds
console.log((Math.floor(myCreatedDate.getTime())/1000)/60);    //in MIN
console.log(((Math.floor(myCreatedDate.getTime())/1000)/60)/60);    //in HOUR



// `${newDate.getDay()} and the time `
let imp = myDate.toLocaleString('default' , {
    day :"numeric"
})

console.log(imp);