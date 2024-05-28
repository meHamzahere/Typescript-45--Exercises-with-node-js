// Define a function to create a car object with optionsal options...
function create_car(manufaturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufaturer: manufaturer,
        model: model
    };
    
    // Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim(); 
    })

    return car;
}

// Call the function to create car object
let my_car = create_car("Toyota","Corolla", "color : Black", "Sunroof : True", "Year : 2024");

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car) 