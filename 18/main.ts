//Making a Array of countries and print its original order
let conuntriesToVisit : string[] = ["China", "Denmark", "Brazil", "Argentina"]
console.log("Original Order", conuntriesToVisit)

// Print the array in alphabetical oreder without modifing the actual array list
console.log("Alphabetical Order", [...conuntriesToVisit].sort())

//show that the array is still in this order
console.log("Sill in original order", conuntriesToVisit)

// Print a array in reverse order without modifing the actual array list
console.log("Reverse Order", [...conuntriesToVisit].reverse())

//show that the array is still in this order
console.log("Sill in original order", conuntriesToVisit)

// we have changed the original array order now
console.log("Original Array reversed", conuntriesToVisit.reverse())

// Print the array to show that it's back to it's original order
console.log("Back to orignal Order", conuntriesToVisit.reverse())

// Print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in alphabetical order", conuntriesToVisit.sort())

// we have changed again the orignal array order now in reverse order again
console.log("Orignal Array reversed again", conuntriesToVisit.reverse())
