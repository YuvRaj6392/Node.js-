var mongoDbClient=require('mongodb').MongoClient;
var dbUrl="mongodb://localhost:27027/c13batch";

var client=new mongoDbClient(dbUrl,{useUnifiedTopology:true});

client.connect((err,dbInstance)=>{
    if(err){
        console.log("connection failed!")
    }
    else
    {
        var dbo=dbInstance.db("c13batch");
    //    dbo.collection("students").insertOne({
    //     "fname":"yuvraj",
    //     "lastname":"srivastava"
    //    })    
    dbo.collection("studetns").find({}).toArray((err,data)=>{
        console.log(data)
    })   
    }
})