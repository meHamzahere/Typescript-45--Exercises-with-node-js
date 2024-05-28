// Define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Harry Potter", "Hamza", "Usman"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
