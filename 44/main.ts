// Define a function with a rest parameter that accept Items agreements representing sandwiches
function makeSandwich(...items:string[]){
    console.log("\n Making a sandwich with the following items: \n")

    items.forEach(singleItem => console.log("-" + singleItem))

    console.log("\n Now Enjoy Sandwich")
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg")

makeSandwich("Bread", "Butter")

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato")
