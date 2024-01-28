const language = ["js","cpp","html","css","java"]


//Can't return items in forEach loop
const lang = language.forEach( (items)=>{
    // console.log(items);
    return items.length > 2
} )
// console.log(lang);

//Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result =  numbers.filter( (items)=> {
    return items > 5
 })

// const result = numbers.filter( (items)=> items> 5)


//This is method to use forEach loop to filter
const newNum = []
numbers.forEach( (num) => {
    if(num>5){
        newNum.push(num)
    }
} )
// console.log(newNum)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

    let newBooks = books.filter( (items)=> items.genre === "Science" )

    newBooks = books.filter( (items)=>{
        return items.publish > 1995 && items.genre === "History"
    } )

    console.log(newBooks);