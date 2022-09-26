const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Player = require('./models/player');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/api/player/:player', (req, res) => {
    Player.find({ playerName: req.params.player })
    .then(result => {
        if(result.length === 0) {
            res.status(400).json('Not Found');
            return;
        }
        res.json(result);
    })
    .catch(e => res.send(400).json('Not Found'));
});



app.get('/api/team/:team', (req, res) => {
    Player.find({ teamName: req.params.team })
    .then(result => {
        if(result.length === 0) {
            res.status(400).json('Not Found');
            return;
        }
        res.json(result);
    })
    .catch(e => res.send(400).json('Not Found'));
});

app.post('/api/player', (req, res) => {
    Player.insertMany(req.body)
    .then(result => res.status(201).json(result))
    .catch(e => res.sendStatus(422));
});

module.exports = app;