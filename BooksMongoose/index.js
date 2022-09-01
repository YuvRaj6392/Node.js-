const mongoose=require("mongoose");
let BookModel=require('./models/books.schema')
mongoose.connect("mongodb://0.0.0.0:27017/Books",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("Successfully connected to the database!")

    BookModel.insertMany([
        { name: 'Node.js Guide', author: 'Rocky & Prachi', pages: 250, bestPrice: 850, kindleVersion: 1 },
        { name: 'Python Programming', author: 'Suven', pages: 230, bestPrice: 2050, kindleVersion: 1 },
        { name: 'Databases', author: 'Ifrah Malik', pages: 150, bestPrice: 230.50, kindleVersion: 0 },    
        { name: 'Javascript', author: 'Prachi Agarwal', pages: 290, bestPrice: 560.75, kindleVersion: 1 }
    ]).then((doc)=>{
        console.log("inserted many records")
    }).catch((err)=>{
        console.log("could not insert many records!")
    })


// BookModel.updateOne({
//     bestPrice:{$gt:2000}
// },{bestPrice:1999},(err,doc)=>{
//     if(err)
//     {
//         console.log(`${err} is coming!`)
//     }
//     else
//     {
//         console.log("update the field successfully!")
//     }
// })

// BookModel.deleteOne({
//     kindleVersion:0
// },(err,doc)=>{
//     if(err)
//     {
//         console.log("could not delete the field!")
//     }
//     else
//     {
//         console.log("successfully deleted the field!")
//     }
// })


// BookModel.find({
//     kindleVersion:1
// },(err,doc)=>{
//     if(err)
//     {
//         console.log("could not find the field!")
//     }
//     else
//     {
//         console.log(doc)
//     }
// })



}).catch((err)=>{
    console.log("Could not connect to the database!")
})