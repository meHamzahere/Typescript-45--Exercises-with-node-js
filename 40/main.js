function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variable with different values
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Usman", "Album title 2");
// Calling a make_album function with third partner
var album3 = make_album("Ali", "Album title 3", 10);
// Printing the variable
console.log(album1);
console.log(album2);
console.log(album3);