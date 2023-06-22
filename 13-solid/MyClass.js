
const EventEmmiter = require("events");

class MyClass extends EventEmmiter
{
    // constructor()
    // {
    // }

    insertIntoDb(data)
    {
        console.log("data inserted into database...");

        this.emit('NOTIFY', data);
    }
}

module.exports = MyClass;