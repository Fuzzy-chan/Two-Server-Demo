var http = require("http");
var goodArray =["Lookin' good Friend.","You are the smartest person I know!", "Enter generic compliment here."];
var badArray = ["It's not too late to give up.","Maybe try a little harder next time.","Eww... just ewww."];


var handleRequestGood = function(req, res){
    var random = goodArray[Math.floor(Math.random()*goodArray.length)]
    res.end(random);

};
var handleRequestBad = function(req, res){
    var random = badArray[Math.floor(Math.random()*badArray.length)]
    res.end(random);

};

var server1 = http.createServer(handleRequestGood);
var server2 = http.createServer(handleRequestBad);

server1.listen(7000,function(){
    console.log("Good server working!")
});
server2.listen(7500,function(){
    console.log("Bad server running!")
});