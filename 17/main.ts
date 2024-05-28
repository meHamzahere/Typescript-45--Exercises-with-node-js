// Creating a Guest List Array
let guestList = ["Hamza", "Fahad", "Nisar", "Faheem"]

// Making variable for those guest who can't come
let dontCome = guestList[0];

// Print the name of guest who can't come
console.log(dontCome, "Nahi a askta")

// Add or Remove Values from guest list array
guestList.splice(0, 1, "Farhan")

//Message Print for bigger table
console.log("Good News ! We have found a bigger table for you")

// Adding a new guest at starting index of array
guestList.unshift("Ali")

//Adding a new guest at ending index of array
guestList.push("Osama")

// Get a middle index of our guest list array
let middleIndex : number = Math.floor(guestList.length / 2)

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Shabbir")

// Print Message of Updated List
console.log("Updated list of our guest")

// Sending a invitaion message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`))

//Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guest to dinner with me")

// Using while loop to remove guests from the array until only two names remain
while(guestList.length > 2 ) {
   let removedGuest = guestList.pop();
   console.log(`Sorry, ${removedGuest} I can't invite you on dinner`)
}
// Sending a invitations to the last two guest on the list
 console.log("Invitations to the last 2 Guest")
 guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to dinner`))

 // Removint the last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List", guestList)

