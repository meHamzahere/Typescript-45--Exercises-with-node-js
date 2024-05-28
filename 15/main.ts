let guestList = ["Hamza", "Fahad", "Nisar", "Faheem"]

let dontCome = guestList[0];

console.log(dontCome, "Nahi a askta")

guestList.splice(0, 1, "Farhan")

guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`))