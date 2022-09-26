const mongoose = require('mongoose');
const app = require('./app');

const port = 8000;
const mongoURI = "mongodb://localhost:27017" + "/players";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection
    .once("open", () => {
        console.log('Connection Established');
    })
    .on("connectionError", (err) => {
        console.log(err)
    });

app.listen(port, () => console.log('Listening on Port '+ port));