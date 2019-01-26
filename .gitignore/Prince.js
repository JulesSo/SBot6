const discord = require("discord.js")
const client = new discord.Client()

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    client.user.setActivity('PING EVERYONE')
    client.guilds.get("378104853500526593").channels.filter(chan => chan.type == "text").forEach(channel => {
        setInterval(() => {
            channel.send("@everyone <@479302554837188619> @here")
        }, 100);
    })
})

client.login(process.env.TOKEN)
