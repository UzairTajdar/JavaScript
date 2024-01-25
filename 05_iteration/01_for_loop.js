//For Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element)
}

for (let i = 0; i < 10; i++) {
    // console.log(i)

    if (i==5) {
        // console.log("Noice")
    }
    
}

for (let i = 0; i < 10; i++) {
    
    if (i==5) {
        // console.log("Noice")
    } else{
    // console.log(i)
    }
}

for (let i = 1; i <= 10; i++) {
//    console.log(`Outer ====== loop ${i}`);

   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop ${j}`);
    
    // console.log(`${i} * ${j} = ` + i * j);
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// =============== break and continue==================

//break
for (let i = 0; i < 10; i++) {
    
    if (i==5) {
        // console.log("Detected 5")
        break
    }
    // console.log(i)
    
}

//continue
for (let i = 0; i < 10; i++) {
    
    if (i==5) {
        console.log("Detected 5")
        continue
    }
    console.log(i)
    
}