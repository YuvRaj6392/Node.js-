var MongoClient=require("mongodb").MongoClient;
var url="mongodb://0.0.0.0:27017/Movies";
MongoClient.connect(url,function(err,db){
    if(err)
    {
        console.log("could not connect!");
    }
    else
    {
       var db=db.db("Movies");
       db.collection("movie").insertOne({name:"Madhusuchan Pandey"},(err,data)=>{
        console.log("added");
       });
    }
})




// dbUrl.collection.find({age:{$gt:30}}).toArray(function(){

// })
// dbUrl.collection.find({$and:[{age:{$gt:30}},{location:"Mumbai"}]})

// dbUrl.collection.find().sort({name:1}).toArray(function(err,result){

// })

// dbUrl.collection("emop").drop(function(){

// })

// db.movie.insertMany([{ title: 'The Room', imdb: { rating: 3.4, votes: 25673, id: 368226 } },
// { title: 'The Room', imdb: { rating: 3.5, votes: 22565, id: 368227 } },
// { title: 'Titanic', imdb: { rating: 4.5, votes: 495673, id: 368555 } },
// { title: 'Avatar', imdb: { rating: 4.6, votes: 1025673, id: 968200 } },
// { title: 'Spiderman Homecoming', imdb: { rating: 4.3, votes: 525673, id: 778200 } }]);

// db.movie.find({title:"The Room"});