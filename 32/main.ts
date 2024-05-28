// Array of Current Users
let current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"]

// Array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// Loop through new_users to check for usernames availibilty 
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})
