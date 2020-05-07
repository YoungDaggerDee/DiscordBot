//IMPORTS
const emoji = require('./json/emoji.json')
const Discord = require("discord.js")
const config = require('./json/config.json')
const msgs  = require('./json/messages.json')

//DISCORD PACKAGES
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

//TOKENS
const tokens = {
  admin: config.tokens.admin,
  mod: config.tokens.mod,
  highestAdmin: config.tokens.powerAdmin,
  owner: config.tokens.admin
}
// const adminToken = config.tokens.admin
// const modToken = config.tokens.mod
// const highestAdminToken = config.tokens.powerAdmin
// const ownerToken = config.tokens.owner

//FUNCTION ON MESSAGE 
client.on('ready', () => {
    for(let i=0;i<10;i++){console.log()}
    console.log('\x1b[36m%s\x1b[0m',`BOT INFO`)
    console.log()
    console.log("You're running Bot version: ["+config.version+" ("+config.build+")] "+config.stage)
    console.log(`Name: ${client.user.tag}`)
    console.log(`Logged in as ${client.user.tag}!`)
    console.log(`Bot id: ${client.user.id}`)
    console.log(``)
    console.log('\x1b[32m%s\x1b[0m',`Status: Running`)
});
  //ON MESSAGE SENT
client.on('message', msg => {
  let random = Math.floor(Math.random()*emoji.length)
  for(let i=0;i<random;i++){
    msg.react(emoji[Math.floor(Math.random()*emoji.length)])
  }
  //REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES 
  //REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES 
  //REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES 
  //REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES REMOVE NORMAL MESSAGES 
  if(msg.channel.id == config.rooms.report){
    console.log(!config.tokens.admin == msg.author.id )
    if(!msg.author.id == config.tokens.admin){
      message.delete()
      return
    }
  }
  let currentTime = d.getTime()
  messages.push(`AUTHOR: ${msg.author.username} | MESSAGE: ${msg.content} | TIME: ${currentTime}`)
  
  //RANDOM EMOJI COMMAND
  if (msg.content === '!emoji'){
      msg.channel.send(emoji[Math.floor(Math.random()*emoji.length)])
      msg.delete()
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
      .setColor('#32CD32')
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
    // if(!message.member._roles.includes(tokens.admin)){
    //   const exampleEmbed = new Discord.MessageEmbed()
    //   .setColor('#FF0000')
    //   .setTitle('**Permissions**')
    //   .setDescription(msgs.system.Perms)
    //   .setTimestamp()
    //   message.author.send(exampleEmbed);
    //   message.delete()
    //   return
    // }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#FFD700')
    .setTitle('**USAGE**')
    .setDescription(msgs.usage.cc)
    .setTimestamp()
    message.delete()
    if (!amount) {
      message.delete()
      return message.author.send(exampleEmbed)}
    if (isNaN(amount)) {
      message.delete()
      return message.author.send(exampleEmbed)
    }
    if (amount > 300) {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setTitle('**ERROR**')
      .setDescription(msgs.errors.cc.more)
      .setTimestamp()
      return message.author.send(exampleEmbed)
    } 
    if (amount < 1) {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setTitle('**ERROR**')
      .setDescription(msgs.errors.cc.less)
      .setTimestamp()
      return message.author.send(exampleEmbed)}
    const exampleEmbed1 = new Discord.MessageEmbed()
    .setColor('#32CD32')
    .setTitle('Message delete')
    .setDescription(msgs.descriptions.rmMessages)
    .addFields(
      { name: "**Count**",value: "**{ "+amount+" }**"},
      { name: "**Room**", value: "**{ "+message.channel.name+" }**"}
    )
    .setTimestamp()
    adlog.push(message.author.username+"#"+message.author.discriminator+" **REMOVED** "+amount+" in "+message.channel.name)
    message.author.send(exampleEmbed1)
    async function remove(){
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
    message.channel.bulkDelete(messages 
    )});
    }
    message.delete()
    remove()
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
    if(!message.member._roles.includes(tokens.admin)){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('**Permissions**')
      .setDescription(msgs.system.Perms)
      .setTimestamp()
      message.author.send(exampleEmbed);
      message.delete()
      return
    }
    const args = message.content.split(' ').slice(1);
    const kickReason = args.slice(1).join(' '); 
    if(!kickReason){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.kick)
      .setTimestamp()
      message.author.send(exampleEmbed);
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
            .setColor('#32CD32')
            .setTitle('Kick')
            .setDescription("Hrac byl uspense kicknut")
            .addFields(
              { name: "**Hrac**",value: user.username+"#"+user.discriminator},
              { name: "**Duvod**", value: banReason}
            )
            .setTimestamp()
            message.delete()
            message.author.send(exampleEmbed);
                    })
          .catch(err => {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('**ERROR**')
            .setDescription(msgs.system.Error)
            .setTimestamp()
            message.author.send(exampleEmbed);
            message.delete()
          });
      } else {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('**ERROR**')
        .setDescription(msgs.system.Error)
        .setTimestamp()
        message.author.send(exampleEmbed);        
        message.delete()
        return
      }
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.kick)
      .setTimestamp()
      message.author.send(exampleEmbed);
      message.delete()
      return
    }
  }
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 
  //NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE NOTICE 

  if (message.content.startsWith('!n')) {
    dm(message, ":smile:")
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
    if(!message.member._roles.includes(tokens.admin)){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('**Permissions**')
      .setDescription(msgs.system.Perms)
      .setTimestamp()
      message.author.send(exampleEmbed);
      message.delete()
      return
    }
    const args = message.content.split(' ').slice(1);
    const banReason = args.slice(1).join(' '); 
    if(!banReason){
      message.delete()
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.ban)
      .setTimestamp()
      message.author.send(exampleEmbed);
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
	.setColor('#32CD32')
	.setTitle('Ban')
	.setDescription("Uspense zabanovany hrac")
	.addFields(
    { name: "**Hrac**",value: user.username+"#"+user.discriminator},
    { name: "**Duvod**", value: banReason}
	)
	.setTimestamp()
  message.delete()
  message.author.send(exampleEmbed);
          })
          .catch(err => {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFD700')
            .setTitle('**USAGE**')
            .setDescription(msgs.system.Perms)
            .setTimestamp()
            message.author.send(exampleEmbed);
            console.error(err);
          });
      } else {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('**ERROR**')
        .setDescription(msgs.system.Error)
        .setTimestamp()
        message.author.send(exampleEmbed);
        message.delete()
      }
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.Ban)
      .setTimestamp()
      message.author.send(exampleEmbed);
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
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.report)
      .setTimestamp()
      message.author.send(exampleEmbed);
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
	.setColor('#32CD32')
	.setTitle('Report')
	.setDescription("Hrac byl uspense nahlasen")
	.addFields(
    { name: "**Hrac**",value: user.username+"#"+user.discriminator},
    { name: "**Duvod**", value: reportReason},
	)
	.setTimestamp()
  message.author.send(exampleEmbed);

      } else {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**Permissions**')
        .setDescription(msgs.system.NotFound)
        .setTimestamp()
        message.author.send(exampleEmbed);
      }
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.report)
      .setTimestamp()
      message.author.send(exampleEmbed);
    }
  }
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  //REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT REMOVE REPORT
  if (message.content.startsWith('!clear')) {
    const args = message.content.split(' ').slice(1);
    
    if(!args){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.clear)
      .setTimestamp()
      message.author.send(exampleEmbed);
      return message.delete()
    }
    let intIndex = parseInt(args)
    const int2 = intIndex+1
    if(intIndex%2!=0){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.clear)
      .setTimestamp()
      message.author.send(exampleEmbed);
      return message.delete()
    }
    if(intIndex >= report.length){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.clear)
      .setTimestamp()
      message.author.send(exampleEmbed);
      return message.delete()
    }
        message.delete()

        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#32CD32')
	.setTitle('Report')
	.setDescription("Report byl smazan!")
	.addFields(
    { name: "**Hrac**",value: report[intIndex]},
    { name: "**Duvod**",value: report[int2]}
	)
  .setTimestamp()
  adlog.push(message.author.username+"#"+message.author.discriminator+" REMOVED REPORT:")
  adlog.push(report[intIndex] +" "+report[int2])
  console.log("CLEARED: ["+report[intIndex] +"for: "+report[int2]+"]")
  message.author.send(exampleEmbed)
  report.splice(intIndex,2)
  message.delete()
  }
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  //LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY LOG REPORTY 
  if(message.content.startsWith('!log')) {
    let tmpBoolean = false
    if(!message.member._roles.includes(tokens.admin)){
      tmpBoolean = true 
    }
    if(!message.member._roles.includes(tokens.mod)){
      if(tmpBoolean){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**Permissions**')
        .setDescription(msgs.system.Perms)
        .setTimestamp()
        message.author.send(exampleEmbed);
        message.delete()
        return
      }
    }

    if(!report.length){
      reportiky = msgs.errors.noReports
    }else{
      reportiky = report
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#32CD32')
    .setTitle('**Report Log**')
    .setThumbnail()
    .addFields(
        {name:"**Reportovani hraci**", value: reportiky}, 
    )
    .setTimestamp()
    message.delete()
  message.author.send(exampleEmbed);
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
    if(!message.member._roles.includes(tokens.admin)){
      message.delete()
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('**Permissions**')
      .setDescription(msgs.system.Perms)
      .setTimestamp()
      message.author.send(exampleEmbed);
      return 
    }
    if(control != 2){
      message.delete()
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FFD700')
      .setTitle('**USAGE**')
      .setDescription(msgs.usage.ann)
      .setTimestamp()
      message.author.send(exampleEmbed);
      return 
    }
    const args = message.content.split("|").slice(0)
    const header = message.content.split("|")[1]
    const text = message.content.split("|")[2]
    if(!args){
      return message.author.send(msgs.usage.ann)
    }
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#32CD32')
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
    if(!message.member._roles.includes(tokens.highestAdmin)){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('**Permissions**')
      .setDescription(msgs.system.Perms)
      .setTimestamp()
      message.author.send(exampleEmbed);
      return message.delete()
    }
    let bany
    let kicky
    let reporty 
    //CHECK IF THERE ARE ANY BANNS OR KICKS
    if(banns.length == 0){bany = msgs.errors.no.banns}else{bany = banns}
    if(kicks.length == 0){kicky = msgs.errors.no.kicks}else{kicky = kicks}
    if(report.length==0){reporty = msgs.errors.no.reports}else{reporty = report}
    
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#32CD32')
    .setTitle('**Admin LOG**')
    .setThumbnail()
    .addFields(
        {name:"**Bany**", value: bany},
        {name:"**Kicky**",value: kicky},
        {name:"**Reporty**",value: reporty}
    )
    .setTimestamp()
  message.delete()
  message.author.send(exampleEmbed);
    
  }
  if(message.content.startsWith('!serverlog')) {
    if(message.channel.id != config.rooms.admin){
      message.delete()
      return
    }
    if(!message.member._roles.includes(ownerToken)){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('**Permissions**')
      .setDescription(msgs.system.Perms)
      .setTimestamp()
      message.author.send(exampleEmbed);
      message.delete()
      return
    }
    //CHECK IF THERE ARE ANY BANNS OR KICKS
    let log3
    if(adlog.length == 0){log3 = "Zadna aktivita"}else{log3 = adlog}
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#32CD32')
    .setTitle('**Server LOG**')
    .setThumbnail()
    .addFields(
        {name:"**LOG**",value: log3}
    )
    .setTimestamp()
  message.delete()
  message.author.send(exampleEmbed);
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
  message.delete()
  if(!nMessage){
    message.author.send(msgs.usage.notice)
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
      message.author.send(msgs.system.Error);
    }
  } else {
    message.author.send(msgs.usage.notice);
  }
}



client.login(config.key)