// Array of Current Users
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
// Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop through new_users to check for usernames availibilty 
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
