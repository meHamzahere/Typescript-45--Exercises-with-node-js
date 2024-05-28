// Creating a Guest List Array
var guestList = ["Hamza", "Fahad", "Nisar", "Faheem"];
// Making variable for those guest who can't come
var dontCome = guestList[0];
// Print the name of guest who can't come
console.log(dontCome, "Nahi a askta");
// Add or Remove Values from guest list array
guestList.splice(0, 1, "Farhan");
//Message Print for bigger table
console.log("Good News ! We have found a bigger table for you");
// Adding a new guest at starting index of array
guestList.unshift("Ali");
//Adding a new guest at ending index of array
guestList.push("Osama");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Shabbir");
// Print Message of Updated List
console.log("Updated list of our guest");
// Sending a invitaion message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
