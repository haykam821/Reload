var successDate = new Date(0);

exports.onMessageReceived = (function Reload(bot, doc, user, userID, channelID, message, messageID, event) {
    require('../Exports.js').registerCmd('reload','Reloads the plugins placed in the plugins folder.');
    if(message === undefined){
        return;
    }
    
        if (message === doc.prefix + "reload") {
        if ((new Date().getTime() - successDate.getTime())>5000){ // 5 second cooldown
            bot.sendMessage({
            to: doc.logchannel,
            message: "<@" + userID + "> asked to reload the plugins."
        });
        bot.sendMessage({
            to: channelID,
            message: "The plugins have been reloaded."
        });
        var successDate = new Date();
        require('../Onebot.js').loadPlugins();
    }}

});
