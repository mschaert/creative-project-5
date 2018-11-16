var express = require('express');
var router = express.Router();

/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency
mongoose.connect('mongodb://localhost/cardsDB', { useNewUrlParser: true }); //Connects to a mongo database called "cardsDB"

// {
//     "name": "Cellar",
//     "set": "Dominion (Base Set)",
//     "cost": 2,
//     "types": ["action"],
//     "image": "../img/Cellar.jpg",
//     "uses_curses": false,
//     "is_fork": false,
//     "adds_buys": false
// }
var cardSchema = mongoose.Schema({ //Defines the Schema for this database
    name: String,
    set: String,
    cost: Number,
    types: Array,
    image: String,
    uses_curses: Boolean,
    is_fork: Boolean,
    add_buys: Boolean
});

var Card = mongoose.model('Card', cardSchema); //Makes an object from that schema as a model
var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected');
});


router.post('/cards', function(req, res, next) {
    var newCards = new Card(req.body);
    console.log(newCards);
    newCards.save(function(err, post) {
        if(err) return console.error(err);
        console.log(post);
        res.sendStatus(200);
    });
});


router.get('/cards', function(req, res, next) {
    console.log("Get cards");
    Card.aggregate([{ $sample : { size: 10 } }], function(err, cards) {
        if (err) {
            return console.error(err);
        } else {
            console.log("All Cards");
            console.log(JSON.stringify(cards));
            res.json(JSON.stringify(cards));
        }
    });
});

router.get('/cards/1', function(req, res, next) {
    console.log("Get single card");
    Card.aggregate([{ $sample : { size: 1 } }], function(err, cards) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Single Card");
            console.log(JSON.stringify(cards));
            res.json(JSON.stringify(cards));
        }
    });
});

module.exports = router;
