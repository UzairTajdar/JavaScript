//for each

const games = ["GTA", "Pubg", "FreeFire", "Call of Duty", "Cafeland"]

//Method 1
games.forEach( function (items){
    // console.log(items);
} )

//Method 2
games.forEach( (items) => {
    // console.log(items);
} )

//Method 3

function print(items) {
    // console.log(items)
}

games.forEach(print)

games.forEach( (items, index, arr)=>{
    // console.log(items,index,arr)
} )


//Object in array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (items)=>{
    console.log(`${items.languageName} :- ${items.languageFileName}`);
} )