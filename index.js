const userInfo = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${userInfo.userName}, from ${userInfo.userCity}` ,
    e : "^",
    T : "U",
}));