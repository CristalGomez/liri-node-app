# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. The purpose of this app is to get it to listen for and execute commands typed in by the user. 

## APIs & NPMs Used
1. Spotify
1. OMBD
1. Bands in Town
1. momentJS

The user is given the option to give four different commands:

**Note**: It is important the command (i.e. spotify-this-song) is not in quotation marks (" ") & that the topic (i.e. "song name") is in quotation marks (" ")
1. spotify-this-song + "song name"
1. concert-this + "artist/band name"
1. movie-this + "movie title"
1. do-what-it-says 
    1. Follows command from the random.txt file

This project is useful in the way that it functions like the iPhone SIRI. It is easy and efficient. 

### How to use:
Decide which command you want LIRI bot to listen for and execute. Once you have decided which command LIRI will be executing, type in the appropriate command (i.e. spotify-this-song) and parameter (i.e. "song name"). If something is not functioning properly, the app will return an error message with a solution to the problem. 

If all is well, the app should look like this:

**typed command & topic for the concert-this function:**
![Image of concertCommand](https://github.com/CristalGomez/liri-node-app/blob/master/assets/images/concert-command.png)

**response from the concert-this function:**
![Image of concertResponse](https://github.com/CristalGomez/liri-node-app/blob/master/assets/images/concert-response.png)

**typed command & topic for the spotify-this-song function:**
![Image of spotifyCommand](https://github.com/CristalGomez/liri-node-app/blob/master/assets/images/spotify_command.png)

**reponse from the spotify-this-song function:**
![Image of spotifyResponse](https://github.com/CristalGomez/liri-node-app/blob/master/assets/images/spotify-5-responses.png)

**typed command/topic & response from the movie-this function:**
![Image of movieThis](https://github.com/CristalGomez/liri-node-app/blob/master/assets/images/movie-command-%26-response.png)

**do-what-it-says goal:**
The goal of this function is to properly read the random.txt file & execute the appropriate API call
![Image of doWhat](https://github.com/CristalGomez/liri-node-app/blob/master/assets/images/dowhat.png)