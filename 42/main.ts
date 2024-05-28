// Define the function to show magicians name
function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string []){
    magicians.map(name => `The Great ${name}`)
}

// Define an array of magicians names
let magicians_names = ["Harry Potter", "Hamza", "Usman"]


let great_magicians = make_great(magicians_names);

console.log(great_magicians)