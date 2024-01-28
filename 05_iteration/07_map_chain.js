
//Map

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = numbers.map( (items)=>{
//     return items*2
// } )

const newNum = numbers
                .map( (items)=> items *10 )
                .map( (items)=> items + 5 )
                .filter( (items)=> items > 50 )


console.log(newNum);
