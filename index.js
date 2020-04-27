const emoji = require('./emoji.json')
const Discord = require("discord.js")
const config = require('./config.json')
const bot = new Discord.Client()
const client = new Discord.Client();
const d = new Date()
const messages = []
const report = []
const botName = config["bot-name"]
client.on('ready', () => {
    for(let i=0;i<10;i++){console.log()}
    console.log("You're running Bot version: ["+config.version+"]")
    console.log(`Logged in as ${client.user.tag}!`)
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
  //REPORT
  if (message.content.startsWith('!report')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        message.delete()
        console.log("REPORTED: ["+user.username+" #"+user.discriminator+"]")
        report.push(user.username+"#"+user.discriminator)

        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Report')
	.setDescription("Uzivatel ["+ user.username+"#"+user.discriminator +"] byl nahlasen")
	.addFields(
		{ name:"Dekujeme",value: 'Admin co nejrychleji vyresi tvuj problem' },
		// { name: 'Inline field title', value: 'Some value here', inline: true },
	)
	// .addField('Inline field title', 'Some value here', true)
	// .setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	// .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

  message.channel.send(exampleEmbed);

      } else {
        message.reply("Hrac nebyl nalezen!");
      }
    } else {
      message.reply("You didn't mention the user to report!");
    }
  }
  if(message.content.startsWith('!list')) {
    if(report.length == 0){
      message.channel.send("Zadny hrad nebyl reportovan")
      return
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Report List')
    .setThumbnail()
    .addFields(
        {name:"Reportovani hraci", value: report } 
    )
    .setTimestamp()
  
  message.channel.send(exampleEmbed);
    
  }
});




client.login(config.key)
