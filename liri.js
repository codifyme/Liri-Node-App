// Spotify Info

require("dotenv").config();

var keys=require("./keys.js");
var spotify=new spotify(keys.spotify);

//Request Info 
var request=require("request");

// Date Formatting
var moment=require("moment");

// fs Info
var fs=require("fs");

//command in process
var command=process.argv[2];

//Find your artist event and concert
if(command==="concert-this"){
    var artist=process.argv[3];
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error, response,body){
        if (!error && response.statusCode===200){
            console.log("--------------------------------");
            console.log("Venue: "+JSON.parse(body[0].venue.name);
            console.log("Location:"+JSON.parse(body)[0].venue.city +" " +JSON.parse(body)[0].venue.region);
            console.log("Date:"+ moment(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
            console.log("---------------------------");

        }
    });


    //Find your favorite Song


} else if (command==="spotify-this-song"){
    var song=process.argv[3];
    
    if(song==undefined){
        song="The Sign";
    }

    spotify.search({
        type:"track",
        query:song
    },function (err,data){
        if(err){
            return console.log("Error occured:" + err);
        }
        console.log("--------------------------");
        console.log("Artist: " + data.tracks.items[0].artists.name);
        console.log("Song Name: "+ data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Album: "+ data.tracks.items[0].album.name);
        console.log("--------------------------");
    });

    //Find your favorite Movie info

}else if (command ==="movie-this") {
    var movie=process.argv[3];

    if(movie === undefined){
        movie="Mr. Nobody";
    }

    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body){
        if(!error && response.statusCode===200){
        
        //Movie Info
        console.log('-----------------------------');
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year Released: " + JSON.parse(body).Year);
        console.log("IMDB Rating: "+ JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: "+JSON.parse(body).Rating[1].Value);
        console.log("Country Produced: " +JSON.parse(body).Rating[1].Value);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("pilot: "+ JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log(" ------------------------------- ");
        }
    });
// do what it says
else if (command ==="do-what-it-says"){
    fs.readFileSync("random.txt", "utf8", function (error, data){
        if (error){
            return console.log(error);
        }
        console.log(data);
        var dataArr=data.split(",");
         console.log(dataArr);

         command=dataArr[0];
         whatTocommand=dataArr[1];

         if (command ==="concert-this"){
             var artist=whatTocommand;

             request("https://rest.bandsintown.com/artist/"+ artist +"/events?app_id=codingbootcamp",function(error, response,body){
                 if(!error && response.statusCode===200){
                     console.log('-------------------------------------------------------------------------------------------------');
                     console.log("Venue:" +JSON.parse(body)[0].venue.name);
                     console.log("Location:" + JSON.parse(body[0].venue.city+ " "+JSON.parse(body)[0].venue.region);
                     console.log("date: " + moment(JSON.parse(body)[0].datetine).format("MM/D/YYYY"));
                     console.log("-------------------------");
                 }3
                 }
             })
         }
    }
        ))
}

}