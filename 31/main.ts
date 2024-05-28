// Creating a Array with 5 values
let userNames = [ "Mahad", "Ali", "Zeeshan", "Admin", "Usman"]

// Remove all values from our Array Now our Array is empty
userNames = []

// If Statement for checking length of our array is empty
if (userNames.length === 0){
    console.log("Your Array is Empty We need to find some users!")
}else{
    // Using ForEach Loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin"){
         console.log(`Hello ${oneUser}, Would you like to see a status report`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}