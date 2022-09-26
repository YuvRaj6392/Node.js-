// display all records 
// load the MongoClient
var mongoClient = require('mongodb').MongoClient;
// Connect to the db
var dbUrl = "mongodb://0.0.0.0:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });
client.connect( (err, dbUrl) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
		var db = client.db('myKartDatabase');
		db.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            
           });
	}
});