//Forin

const myObj = {
    js :"javascript",
    cpp :"C++",
    html :"HTML",
    py :"Python",
}

for (const key in myObj) {
//   console.log(`${key} :- ${myObj[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}



// Can't use map in forin
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(map[key]);
// }