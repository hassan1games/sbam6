const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("506000100980686850")
setInterval(function() {
channel.send(` 
**  
🌹 ألہـلہـهہ أڪبِرِ
ألہـلہـهہ أڪبِرِ
ألہـلہـهہ أڪبِرِ 💖**
 `);
}, 25)
})
  












// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
