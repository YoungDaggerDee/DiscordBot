const emoji = require('./emoji.json')
const Discord = require("discord.js")
const bot = new Discord.Client()
const client = new Discord.Client();
const d = new Date()
const messages = []
const report = []
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  //ON MESSAGE SENT
client.on('message', msg => {
  let currentTime = d.getTime()
  messages.push(`AUTHOR: ${msg.author.username} | MESSAGE: ${msg.content} | TIME: ${currentTime}`)
  //COMMANDS
  if (msg.content === '!ping') {
    msg.send('Pong!')
  }
  //RANDOM EMOJI COMMAND
  if (msg.content === '!emoji'){
      msg.reply(emoji[Math.floor(Math.random()*emoji.length)])
  }
  //REPORT COMMAND
  if (msg.content === '!report'){
      const user = msg.mentions.users.first();
      msg.reply("REPORTED")
      report.push(user)
      console.log(report)
      msg.channel.send('reported ' + user)
  }
  //CONSOLE LOG: ALL MESSAGES
  if (msg.content === 'messages'){
    if(!msg.member.hasPermission('EDIT_MESSAGES')){
      msg.channel.send('Na tento prikaz nemas opravneni! { '+msg.member+" }")
      msg.delete()
      return
    }
    msg.channel.send('ZPRAVY')
      for(let i=0;i<messages.length;i++){
        msg.channel.send(messages[i])
      }
  }
});

//ADMIN COMMANDS
client.on('message', message => {
  if (!message.guild) return;
  //KICK
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
  //BAN
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});



client.login('NjMzOTI5ODcwNjU2NjY3Njc4.XqXPLQ.4TxS52XyR9L2mxmq422jwXIbRJI')
