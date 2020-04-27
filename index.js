//IMPORTS
const emoji = require('./emoji.json')
const Discord = require("discord.js")
const config = require('./config.json')
const message = require('./messages.json')
//DISCORD PACKAGE
const bot = new Discord.Client()
const client = new Discord.Client();

//GLOBALS
const d = new Date()
const messages = []
const report = []
const banns = []
const kicks = []
const adlog = []
const botName = config["bot-name"]
const adminToken = config.adminToken
client.on('ready', () => {
    for(let i=0;i<10;i++){console.log()}
    console.log("You're running Bot version: ["+config.version+"]")
    console.log(`Logged in as ${client.user.tag}!`)
});
  //ON MESSAGE SENT
client.on('message', msg => {
  let currentTime = d.getTime()
  messages.push(`AUTHOR: ${msg.author.username} | MESSAGE: ${msg.content} | TIME: ${currentTime}`)
  
  //RANDOM EMOJI COMMAND
  if (msg.content === '!emoji'){
      msg.reply(emoji[Math.floor(Math.random()*emoji.length)])
  }
});

//ADMIN COMMANDS
client.on('message', message => {
  if (!message.guild) return;
  //KICK
  if (message.content.startsWith('!kick')) {
    if(message.channel.id != "646099774797250575"){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.reply("Na tohle nemas prava")
      return
    }
    const args = message.content.split(' ').slice(1);
    const kickReason = args.slice(1).join(' '); 
    if(!kickReason){
      message.reply("Prosim pouzij /kick <hrac> <duvod>")
      return
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        kicks.push(user.username+"#"+user.discriminator)
        kicks.push(kickReason)
        adlog.push(message.author.username+"#"+message.author.discriminator+" kicked "+user.username+"#"+user.discriminator)
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Kick')
            .setDescription("Hrac byl uspense kicknut")
            .addFields(
              { name: "**Hrac**",value: user.username+"#"+user.discriminator},
              { name: "**Duvod**", value: banReason}
            )
            .setTimestamp()
          
            message.channel.send(exampleEmbed);
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
    //CHECK IF USER HAVE ROLE
    if(message.channel.id != "646099774797250575"){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.reply("Na tohle nemas prava")
      return
    }
    const args = message.content.split(' ').slice(1);
    const banReason = args.slice(1).join(' '); 
    if(!banReason){
      message.reply("Prosim pouzij /ban <hrac> <duvod>")
      return
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        adlog.push(message.author.username+"#"+message.author.discriminator+" BANNED "+user.username+"#"+user.discriminator)
        banns.push(user.username+"#"+user.discriminator)
        banns.push(banReason)
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Ban')
	.setDescription("Hrac byl uspense zabanovan")
	.addFields(
    { name: "**Hrac**",value: user.username+"#"+user.discriminator},
    { name: "**Duvod**", value: banReason}
	)
	.setTimestamp()

  message.channel.send(exampleEmbed);
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
    const args = message.content.split(' ').slice(1);
    const reportReason = args.slice(1).join(' '); 
    if(!reportReason){
      message.reply("Prosim pouzij /report <hrac> <duvod>")
      return
    }

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        message.delete()
        console.log("REPORTED: ["+user.username+"#"+user.discriminator+" for:"+reportReason+"]")
        report.push(user.username +"#"+user.discriminator)
        report.push(reportReason)

        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Report')
	.setDescription("Hrac byl uspense nahlasen")
	.addFields(
    { name: "**Hrac**",value: user.username+"#"+user.discriminator},
    { name: "**Duvod**", value: reportReason}
	)
	.setTimestamp()

  message.channel.send(exampleEmbed);

      } else {
        message.reply("Hrac nebyl nalezen!");
      }
    } else {
      message.reply("You didn't mention the user to report!");
    }
  }
  if(message.content.startsWith('!list')) {
    if(!message.member._roles.includes(adminToken)){
      message.reply("Na tohle nemas prava")
      return
    }


    if(report.length == 0){
      message.channel.send("Zadny hrad nebyl reportovan")
      return
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Report List**')
    .setThumbnail()
    .addFields(
        {name:"**Reportovani hraci**", value: report} 
    )
    .setTimestamp()
  
  message.channel.send(exampleEmbed);
    
  }
  if(message.content.startsWith('!adminlog')) {
    if(message.channel.id != "646099774797250575"){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.reply("Na tohle nemas prava")
      return
    }
    let bany
    let kicky
    //CHECK IF THERE ARE ANY BANNS OR KICKS

    if(banns.length == 0){bany = "Zatim nebyli udeleny bany"}else{bany = banns}
    if(kicks.length == 0){kicky = "Zatim nebyli udeleny zadne kicky"}else{kicky = kicks}
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Admin LOG**')
    .setThumbnail()
    .addFields(
        {name:"**Bany**", value: bany},
        {name:"**Kicky**",value: kicky}
    )
    .setTimestamp()
  
  message.channel.send(exampleEmbed);
    
  }
  if(message.content.startsWith('!serverlog')) {
    if(message.channel.id != "646099774797250575"){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.reply("Na tohle nemas prava")
      return
    }
    //CHECK IF THERE ARE ANY BANNS OR KICKS
    let log3
    if(adlog.length == 0){log3 = "Zadna aktivita"}else{log3 = adlog}
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Server LOG**')
    .setThumbnail()
    .addFields(
        {name:"**LOG**",value: log3}
    )
    .setTimestamp()
  message.channel.send(exampleEmbed);
  }
});



client.login(config.key)
