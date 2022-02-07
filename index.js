const express = require("express");
const cors = require('cors');
var wordList = require("./wordList.js");

const app = express();
const port = 8000;

app.use(cors({origin: '*'}))

app.get('/checkWord', function(req,res){
    var word = req.query.word;
    res.json(wordList.getWord(word));
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});