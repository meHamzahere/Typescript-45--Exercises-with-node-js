var guestList = ["Hamza", "Fahad", "Nisar", "Faheem"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi a askta");
guestList.splice(0, 1, "Farhan");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
