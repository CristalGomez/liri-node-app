require("dotenv").config();
var fs = require("fs")
var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
var moment = require("moment")
var axios = require("axios")

//accessing the client IDs from spotify
var spotify = new Spotify(keys.spotify);

//do this:
var command = process.argv[2];
//find this specific topic
var topic = process.argv[3];

function executeCom(command, topic){
    switch (command) {
        case "concert-this":
            concert(topic)
            break;
    
        case "spotify-this-song":
            spotifyData(topic)
            break;
    
        case "movie-this":
            movieData(topic)
            break;
    
        case "do-what-it-says":
            doWhat()
            break;
    }
} 
executeCom(command,topic);


function concert() {
    axios
        .get("https://rest.bandsintown.com/artists/" + topic + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var concertData = response.data;
            // console.log(concertData)
            for (var i = 0; i < concertData.length; i++) {
                console.log("Venue: " + concertData[i].venue.name);
                console.log("Venue Location: " + concertData[i].venue.city + "," + concertData[i].venue.region);
                console.log("Date: " + moment(concertData[i].datetime).format("LL"))
                console.log("----------------------------------")
            }
        })
}


function spotifyData(topic) {
    spotify.search({ type: 'track', query: topic, limit: 5 }, function (err, data) {
        var songData = data.tracks.items

        // console.log(songData);
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            for (var i = 0; i < songData.length; i++) {
                console.log("Artist: " + songData[i].artists.name);
                console.log("Song Name: " + songData[i].name);
                console.log("Preview Link: " + songData[i].preview_url);
                console.log("Album: " + songData[i].album.name);
                console.log("--------------------------------------------------------------------")

            }
        }
    })
}

function movieData() {
    axios
        .get("http://www.omdbapi.com/?t=" + topic + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            var movieData = response.data
            // console.log(response)
            console.log("Movie Name: " + movieData.Title);
            console.log("Year Released: " + movieData.Year)
            console.log("Rated: " + movieData.Rated);
            console.log("Rotten Tomatoes Rating: " + movieData.imdbRating);
            console.log("Produced in: " + movieData.Country);
            console.log("Language: " + movieData.Language);
            console.log("Plot: " + movieData.Plot);
            console.log("Actors: " + movieData.Actors);
        });
};

function doWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // console.log(data);
        var randomData = data.split(",");
        //will show what the random.txt file says since it is being read by fs.readFile
        console.log(randomData);
        var command = randomData[0];
        var topic = randomData[1]
        executeCom(command, topic)
    })
};
