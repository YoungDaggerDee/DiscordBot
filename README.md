# DiscordBot
Version: 1.0.5 (Closed-Alpha)

# Requirements
    1) Installed NodeJS
    2) Bot must have server-admin role or atleast (ban,kick,delete_messages)

# Setup
    1) config.json: Setup rooms
    2) config.json: Setup roles
    3) config.json: Enter your servername
    4) MESSAGES: If you want you can setup own messages in messages.json 
# FOR CUSTOM EMOJI 
    1) Open emoji.json
    2) Insert your custom emoji id ->
        To get custom emoji id: type name of the emoji and before it \ just like this: ( \:smile: ),
        Then just copy the number, you will get something like this ( <:LULW:704025555359629392> ),
        After that just paste it to emoji.json "704025555359629392"
    You may get error in console that the emoji doesn't exits, make sure that you copy the id correctly!
# FOR BASED EMOJI
    1) Open emoji.json
    2) Insert emoji code like this: ":smile:"

# Functions:
 - report:
    + !report @nickname @reason
    + !clear @id_reportu
 - kick:
    + !kick @nickname @reason
 - ban:
    + !ban @nickname @reason
 - log:
    + !log
- serverlog:
    + !serverlog
- clear chat:
    + !cc @how_manny_messages
- show running config:
    + !sh (only owner can use this command)
# Roles:
 - owner
 - highest_admin
 - admin
 - moderator

# Required Stuff:
 - owner
 - admin

