// Making a Function
function make_shirt (size: string = "Large", printMessage : string = "I love typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function
make_shirt();

// Calling a funciton now with medium size and default message
make_shirt("Medium")

// Calling a function now with Small size and also Different Print Message
make_shirt("Small", "I Love JavaScript")
