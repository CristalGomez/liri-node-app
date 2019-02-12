require("dotenv").config();
var fs = require("fs")
var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
var moment = require("moment")
var axios = require("axios")

//accessing the client IDs from spotify
var spotify = new Spotify(keys.spotify);

var data1 = process.argv[2];
var data2 = process.argv[3];

switch (data1) {
    case "concert-this":
        concert(data2)
        break;

    case "spotify-this-song":
        spotifyData(data2)
        break;

    case "movie-this":
        movieData(data2)
        break;

    case "do-what-it-says":
        doWhat(data2)
        break;
}

function concert() {

}

function spotifyData() {
        spotify.search({ type: 'track', query: data2, limit: "5" }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                for (var i = 0; i < 6; i++){
                    var songData = data.tracks.items
                    console.log(songData);
                    console.log("Artist:" + " " + songData[i].artist[i].name[i]);
                    console.log("Song:" + " " + songData[i].name[i]);
                    console.log("Preview Link:" + " " + songData[i].preview_url[i]);
                    console.log("Album:" + " " + songData[i].album[i].name[i]);
                }

            }
        });
    

}

function movieData() {
    var movie = "";
    axios
        .get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
        });
};

function doWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        console.log(data);
        var diffData = data.split(",");
        console.log(diffData);
    })
};