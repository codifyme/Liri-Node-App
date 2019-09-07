# Liri-Node-App
Overview

LIRI is a Language interpretation and recognition Interface(command line node app).Liri will be a command line node app that takes in parameters and gives you back data.

This app can take any of the following commands in order to search info about your favorite concert in town, song and even movie.

* Concert-this
* spotify-this-song
* movie-this
* do-what-it-says

What Each Command Should Do

1. Node liri.js concert-this <artist/band name here>

* Name of the venue
* Venue location
* Date of the Event(Use moment to format this as "MM/DD/YYYY")

Ex: ![Terminal concert screenshoot] (/images/concert-this.jpg)

2. Node liri.js spotify-this-song '<song name here>'
  
  Artist(s)

* The song’s name
* A preview link of the song from Spotify
* The album that the song is from

If no song is provided then your program will default to “The Sign” by Ace of Base.

Ex: ![Terminal Spotify screenshoot] (./images/spotify-this-song.jpg)
3. Node liri.js movie-this '<movie name here>'
  
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   
   If the user doesn’t type a movie in, the program will output data for the movie ‘Mr. Nobody.’
   
   Ex: ![Terminal Movie screenshoot] (/images/movie-this.jpg)
   
 4. node liri.js do-what-it-says
 
  Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI’s commands.
  
  
  Ex: ![Terminal I Want it That way screenshoot] (/images/IWantitThatway.jpg)
  
  Note: screenshoot of eaxh "EX:" are located inside of the images folder.
   





