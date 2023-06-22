
const EventEmmiter = require("events");

class dbMan extends EventEmmiter
{
    actionOne(data)
    {
        console.log("action One was done!");

        this.emit('NOTIFY', data);
    }
}

module.exports = dbMan;