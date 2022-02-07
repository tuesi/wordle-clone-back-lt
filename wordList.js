var fs = require("fs");
var lt = ["Ą","Č","Ę","Ė","Į","Š","Ų","Ū","Ž"];

module.exports = {
    getWord: function(word) {
        var text = fs.readFileSync("./words.txt", "utf-8");
        var textByLine = text.split("\n");
        if(textByLine.includes(word)){
            var currentWord = textByLine[2140].split('');
            var userWord = word.split('');
            var response = [];
            for(var i = 0; i < 6; i++) {
                if(userWord[i] === currentWord[i]){
                    response[i] = "correct";
                    currentWord[i]='';
                }
                else {
                    response[i] = "none"
                }
            }
            for(var i = 0; i < 6; i++){
                if(currentWord.includes(userWord[i]) && response[i] == "none"){
                    response[i] = "contains";
                    currentWord[currentWord.indexOf(userWord[i])] = ''; 
                }
            }
            return response;
        }
        return "fail";
    }
};