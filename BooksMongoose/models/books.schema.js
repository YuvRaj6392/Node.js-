const mongoose=require("mongoose");
let bookSchema=mongoose.Schema({
    name: { type: String },
    author: { type: String },
    pages: { type: Number },
    bestPrice: { type: Number },
    kindleVersion: { type: Boolean },
   
});


module.exports=mongoose.model('booksTable',bookSchema);