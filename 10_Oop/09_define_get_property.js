// const math = Math.ceil(Math.PI)
// console.log(math)

// Object.defineProperty(Math,'PI',{                   //Can't do this 
//     writable : true,
// })

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'))

const Iphone = {
    name : 'Iphone 15',
    price : '999$',
    model : '2024',


}

// console.log(Iphone)

// console.log(Object.getOwnPropertyDescriptor(Iphone,'price'))

Object.defineProperty(Iphone,'price',{
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(Iphone,'price'))


// for (const [key,value] of Object.entries(Iphone)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`)
//     }
// }