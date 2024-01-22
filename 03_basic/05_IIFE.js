// ==============Immediately Invoked Function Expression (IIFE)====================

//Named IIFE
(function Hello() {
    console.log(`Hy EveryOne`)
})();

//IIFE
( () =>{
    console.log(`Hy EveryOne`)
})();

//HOW Parameter pass to IIFE
( (DBname) =>{
    console.log(`${DBname} DB Connected`)
})("Store");

//Give varaible to IIFE
let name = "Data";
( (DBname) =>{
    console.log(`${DBname} DB Connected`)
})(name);
