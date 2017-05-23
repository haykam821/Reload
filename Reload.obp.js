exports.onMessageReceived = (function Reload(bot, doc, user, userID, channelID, message, messageID, event) {
    require('../Exports.js').registerCmd('reload','Reloads the plugins placed in the plugins folder.');
    if(message === undefined){
        return;
    }
        if (message === doc.prefix + "reload") {
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
    }

});
