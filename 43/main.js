// Define the function to show magicians names
function show_magicicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great throught .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry Potter", "Hamza", "Usman"];
// making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_Magicians = make_great(copy_magician_names);
// show both arrays Original and copied
// Original
console.log("Original Array\n");
show_magicicians(magician_names);
// Copied
console.log("Coppied array\n");
show_magicicians(copy_great_Magicians);
