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
        doWhat(topic)
        break;
}

function concert() {

    axios
        .get("https://rest.bandsintown.com/artists/" + topic + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var concertData = response.data;
            console.log(concertData)
            for (var i = 0; i < concertData.length; i++) {
                console.log("Venu: " + concertData[i].venue.name);
                console.log("Venu Location: " + concertData[i].venue.city + "," + concertData[i].venue.region);
                console.log("Date: " + moment(concertData[i].datetime).format("LL"))
                console.log("----------------------------------")
            }
        })
}


function spotifyData() {
    spotify.search({ type: 'track', query: topic, limit: "5" }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            for (var i = 0; i < 6; i++) {
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