//IMPORTS
const emoji = require('./json/emoji.json')
const Discord = require("discord.js")
const config = require('./json/config.json')
const msgs  = require('./json/messages.json')

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
<<<<<<< HEAD
const adminToken = config.adminToken

=======
const adminToken = config.tokens.admin
const modToken = config.tokens.mod
>>>>>>> fd5a339648343858a1281be4943b59acce1214eb
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
  //RANDOM HENTAI COMMAND
  if(msg.content.startsWith("!hentai")){
    if(msg.channel.id != "704731841047035904"){
      msg.delete()
      return
    }
    console.log(msg)
    let random = Math.floor(Math.random() * 700 ) +1
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hentai')
    .setDescription("preji ti hezku honbu")
    .setImage("https://disco.scrolller.com/media/e"+random+".jpg")
    .setTimestamp()
    setInterval(()=>{
      let random = Math.floor(Math.random() * 700 ) +1
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setImage("https://disco.scrolller.com/media/e"+random+".jpg")
      msg.channel.send(exampleEmbed)
    },1000)
  }
});

//ADMIN COMMANDS
client.on('message', message => {
  if (!message.guild) return;
  
  //CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT 
  //CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT 
  //CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT 
  //CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT CLEAR CHAT 
  if(message.content.startsWith("!cc")){
    const args = message.content.split(' ').slice(1); 
    const amount = args.join(' '); 

    if (!amount) return message.author.send(msgs.usage.cc); 
    if (isNaN(amount)) return message.author.send(msgs.usage.cc); 

    if (amount > 300) return message.author.send(msgs.errors.cc.more); 
    if (amount < 1) return message.author.send(msgs.errors.cc.less);
    async function remove(){
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
    message.channel.bulkDelete(messages 
    )});
    }
    remove()
    message.delete()
    
}
  //KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK 
  //KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK 
  //KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK 
  //KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK KICK 
  if (message.content.startsWith('!kick')) {
    if(message.channel.id != config.rooms.admin){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.author.send(msgs.system.Perms)
      message.delete()
      return
    }
    const args = message.content.split(' ').slice(1);
    const kickReason = args.slice(1).join(' '); 
    if(!kickReason){
      message.author.send(msgs.usage.kick)
      message.delete()
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
            message.author.send(msgs.system.Error);
            message.delete()
            console.error(err);
          });
      } else {
        message.author.send(msgs.system.Error);
        message.delete()
        return
      }
    } else {
      message.author.send(msgs.usage.kick);
      message.delete()
      return
    }
  }
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 

  if (message.content.startsWith('!n')) {
    dm(message, "ban")
  }
  //BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN 
  //BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN 
  //BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN 
  //BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN BAN 
  if (message.content.startsWith('!ban')) {
    //CHECK IF USER HAVE ROLE
    if(message.channel.id != config.rooms.admin){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.author.send(msgs.system.Perms)
      message.delete()
      return
    }
    const args = message.content.split(' ').slice(1);
    const banReason = args.slice(1).join(' '); 
    if(!banReason){
      message.delete()
      message.author.send(msgs.usage.ban)
      return
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        dm(message, "ban")
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
	.setDescription("Uspense zabanovany hrac")
	.addFields(
    { name: "**Hrac**",value: user.username+"#"+user.discriminator},
    { name: "**Duvod**", value: banReason}
	)
	.setTimestamp()

  message.channel.send(exampleEmbed);
          })
          .catch(err => {
            message.author.send(msgs.system.Error);
            console.error(err);
          });
      } else {
        message.author.send(msgs.system.Error);
        message.delete()
      }
    } else {
      message.author.send(msgs.usage.ban);
      message.delete()
    }
  }
  //REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT 
  //REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT 
  //REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT 
  //REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT REPORT 

  if (message.content.startsWith('!report')) {
    message.delete()
    const args = message.content.split(' ').slice(1);
    const reportReason = args.slice(1).join(' '); 
    //CHECK FOR REPORT ROOM
    if(message.channel.id != config.rooms.report){
      message.delete()
      return
    }
    if(!reportReason){
      message.author.send(msgs.usage.report)
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
    { name: "**Duvod**", value: reportReason},
	)
	.setTimestamp()
  message.author.send(exampleEmbed);

      } else {
<<<<<<< HEAD
        message.reply(msgs.usage.report);
=======
        message.author.send(msgs.system.NotFound)
>>>>>>> fd5a339648343858a1281be4943b59acce1214eb
      }
    } else {
      message.author.send(msgs.usage.report);
    }
  }
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  if (message.content.startsWith('!clear')) {
    const args = message.content.split(' ').slice(1);
    
    if(!args){
      message.reply(msgs.usage.clear)
      return
    }
    let intIndex = parseInt(args)
    const int2 = intIndex+1
    if(intIndex%2!=0){
      message.reply(msgs.usage.clear)
      return
    }
    if(intIndex >= report.length){
      message.reply(msgs.usage.clear)
      return
    }
        message.delete()

        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Report')
	.setDescription("Report byl smazan!")
	.addFields(
    { name: "**Hrac**",value: report[intIndex]},
    { name: "**Duvod**",value: report[int2]}
	)
  .setTimestamp()
  console.log(report[report.length-1])
  adlog.push(message.author.username+"#"+message.author.discriminator+" REMOVED REPORT:")
  adlog.push(report[intIndex] +" "+report[int2])
  console.log("CLEARED: ["+report[intIndex] +"for: "+report[int2]+"]")
  message.channel.send(exampleEmbed)
  report.splice(intIndex,2)
  }
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  if(message.content.startsWith('!log')) {
    let tmpBoolean = false
    if(!message.member._roles.includes(adminToken)){
      tmpBoolean = true
    }
    if(!message.member._roles.includes(modToken)){
      if(tmpBoolean){
        message.reply(msgs.system.Perms)
        return
      }
    }

<<<<<<< HEAD
    let reportiky
=======
>>>>>>> fd5a339648343858a1281be4943b59acce1214eb
    if(report.length == 0){
      reportiky = msgs.system.NoneReport
    }else{
      reportiky = report
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Report Log**')
    .setThumbnail()
    .addFields(
        {name:"**Reportovani hraci**", value: reportiky}, 
    )
    .setTimestamp()
  message.channel.send(exampleEmbed);
  }
  //ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT  
  //ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT  
  //ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT  
  //ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT  
  if(message.content.startsWith('!ann')){
    let tmpMessage
    let control = 0
    for(let i=0;i<message.content.length;i++){
      if(message.content[i] === "|"){
        control++
      }
    }
    if(!message.member._roles.includes(adminToken)){
      message.delete()
      return message.author.send(msgs.system.Perms)
    }
    if(control != 2){
      message.delete()
      return message.author.send(msgs.usage.ann)
    }
    const args = message.content.split("|").slice(0)
    const header = message.content.split("|")[1]
    const text = message.content.split("|")[2]
    if(!args){
      return message.author.send(msgs.usage.ann)
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**'+header+'**')
    .setDescription(text)
    .setTimestamp()
    message.channel.send(exampleEmbed);
    message.delete()
  }
  //ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG 
  //ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG 
  //ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG 
  //ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG ADMIN LOG 
  if(message.content.startsWith('!adminlog')) {
    if(message.channel.id != config.rooms.admin){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.reply(msgs.system.Perms)
      return
    }
    let bany
    let kicky
    let reporty 
    //CHECK IF THERE ARE ANY BANNS OR KICKS
    if(banns.length == 0){bany = "Zatim nebyli udeleny bany"}else{bany = banns}
    if(kicks.length == 0){kicky = "Zatim nebyli udeleny  kicky"}else{kicky = kicks}
    if(report.length==0){reporty = "Zatim nebyli udeleny reporty"}else{reporty = report}
    
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Admin LOG**')
    .setThumbnail()
    .addFields(
        {name:"**Bany**", value: bany},
        {name:"**Kicky**",value: kicky},
        {name:"**Reporty**",value: reporty}
    )
    .setTimestamp()
  
  message.channel.send(exampleEmbed);
    
  }
  if(message.content.startsWith('!serverlog')) {
    if(message.channel.id != config.rooms.admin){
      message.delete()
      return
    }
    if(!message.member._roles.includes(adminToken)){
      message.reply(msgs.system.Perms)
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

//FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT) 
//FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT) 
//FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT) 
//FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT)FUNCTION NOTICE (ALERT) 
function dm(message, type){
  let tmpMessage
  const args = message.content.split(' ').slice(1);
  const nMessage = args.slice(1).join(' '); 
  if(!nMessage){
    message.reply(msgs.usage.notice)
    return
  }
  if(type == "ban"){
    tmpMessage = msgs.dm.ban + config.servername+"!"
  }
  else if(type == "kick"){
    tmpMessage = msgs.dm.kick + config.servername+"!"
  }
  else if(type == "mute"){
    tmpMessage = msgs.dm.mute + config.servername+"!"
  }
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      user.send(tmpMessage)
    } else {
      message.reply(msgs.system.Error);
    }
  } else {
    message.reply(msgs.usage.notice);
  }
}

client.login(config.key)
