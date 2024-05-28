// Define the function to show magicians names
function show_magicicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

// Function to make magicians great throught .map() it will modify array
function make_great(magicians : string[]){
    return magicians.map(name => `The Great ${name}`)
}

// Define an array of magicians names
let magician_names = ["Harry Potter", "Hamza", "Usman"]

// making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice()

// Modify the copied array to include "The Great" with their names
let copy_great_Magicians = make_great(copy_magician_names)

// show both arrays Original and copied

// Original
console.log("Original Array\n")
show_magicicians(magician_names)

// Copied
console.log("Coppied array\n")
show_magicicians(copy_great_Magicians)


