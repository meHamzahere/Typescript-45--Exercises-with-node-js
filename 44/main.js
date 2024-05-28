// Define a function with a rest parameter that accept Items agreements representing sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
