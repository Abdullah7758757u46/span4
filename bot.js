const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528319778213986304")
setInterval(function() {
channel.send(`سوف اموت`);
}, 10 )
})

client.login('NTI4MzQ4NTM4Mzg0Njc4OTI2.DwjNZg.thpwFtPNbkDkpX22vLGA4qgGmL0');
