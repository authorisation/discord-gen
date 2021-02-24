const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const UsedCommandRecently = new Set();

client.once('ready',() => {
    console.log('ready!')
    client.user.setActivity('Users and Generating...',{
        type: 'WATCHING'
    }).catch(console.log)
})

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if(UsedCommandRecently.has(message.author.id)){
        message.reply("You need to wait 3 Minutes between commands.")
        message.client.delete();
    } else{

        setTimeout(() =>{
            UsedCommandRecently.delete(message.author.id)
        }, 180000)
    }

    if(command === "say") {
        const sayMessage = args.join(" ");
        message.channel.send(sayMessage);
    }

    if(command === "stocks") {
        message.channel.send({embed: {
            color: 3447003,
            inline: true,
            footer: {
                icon_url: "",
                text: "BOT MADE BY auth#0001"
              },
            fields: [
                {
                    name: "Minecraft :x:", 
                    value: "Come Back Later!",
                    inline: true
                },
                {
                    name: "Spotify :x:", 
                    value: "Come Back Later!",
                    inline: true
                },
                {
                    name: "Fortnite :white_check_mark:", 
                    value: "Currently in Stock!",
                    inline: true
                },
                {
                    name: "Chrunchyroll :white_check_mark:", 
                    value: "Currently in Stock!",
                    inline: true
                },
                {
                    name: "Roblox :x:", 
                    value: "Come Back Later!",
                    inline: true
                },
                {
                    name: "Instagram :x:",
                    value: "Come Back Later!",
                    inline: true
                },              
                {
                    name: "Netflix :x:",
                    value: "Come Back Later!",
                    inline: true
                },
                {
                    name: "NordVPN :x:",
                    value: "Come Back Later!",
                    inline: true
                },
                {
                    name: "Twitter :x:",
                    value: "Come Back Later!",
                    inline: true
                },
            ]
        }});
    }

    if(command === "minecraft") {
        UsedCommandRecently.add(message.author.id);
            message.channel.send({embed: {
                color: 927656,
                description: "currently not in stock!",
            }});
        }

    if(command === "chrunchyroll") {
        UsedCommandRecently.add(message.author.id);
        message.channel.send({embed: {
            color: 3223252,
            description: "Account Send in **DMs**"
        }});

        let chrunchy = ["raymuspalmer@gmail.com:Palmer21", "jcalvmor@gmail.com:carlitosjaja12", "ghorton10@gmail.com:Ga042895","chapman.lee91@gmail.com:4869holmeS", "alexrosen14@gmail.com:jordan12", "darknight609@live.co.uk:delldell1","evbain@yahoo.com:Snickers101", "thijswolters2004@gmail.com:Wolters2004", "spencerjosephw@gmail.com:Zombie1995","afjoshua.rodriquez@gmail.com:rodri890", "evbain@yahoo.com:Snickers101"];
        let result = Math.floor((Math.random() * chrunchy.length));
        let ques = args.slice(1).join(" ");

        message.author.send({embed: {
            color: 3223252,
            description: "not available right now!"
        }});
    }

    if(command === "roblox") {
        UsedCommandRecently.add(message.author.id);
        message.channel.send({embed: {
            color: 2321212,
            description: "currently not in stock!"
        }});
    }

    if(command === "fortnite") {
        UsedCommandRecently.add(message.author.id);
            message.channel.send({embed: {
                color: 3223252,
                description: "Account Send in **DMs**"
            }});
    
            let fortAcc = ["carlosamopaz@gmail.com:c.a.p2000","nike040719@gmail.com:campeon1","pereromero03@gmail.com:pere2003","koguawsome@gmail.com:batman12","traviskizer@gmail.com:C0ffee12","drossi760@gmail.com:mdude2000","shota.hodono@gmail.com:hodono0421","cobyjobrien@gmail.com:nets2001","jackbarnes167@gmail.com:Mufc1267","strmckay@hotmail.com:reymand619","mcartagena7496@yahoo.com:Mike2189","riordan.brian62@gmail.com:maxsam11","aristegopoulos@gmail.com:artegos23gianis","luucashanyou@gmail.com:saopaulofc1","smokdu93@gmail.com:rayane04"];
            let result = Math.floor((Math.random() * fortAcc.length));
            let ques = args.slice(1).join(" ");
    
            message.author.send({embed: {
                color: 3223252,
                description: "not available right now!"
            }});
        }

    if(command === "spotify") {
        UsedCommandRecently.add(message.author.id);
        message.channel.send({embed: {
            color: 325211,
            description: "currently not in stock!"
        }});
    }

    if(command === "instagram") {
        UsedCommandRecently.add(message.author.id);
        message.channel.send({embed: {
            color: 16134159,
            description: "currently not in stock!"
        }});
    }
})
client.login(config.token)
