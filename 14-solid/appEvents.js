function notifyMe(obj)
{
    obj.on('NOTIFY', (data)=>{console.log('action');console.log(data)});

    obj.on('NOTIFY', (data)=>{console.log('next action');console.log(data)});

}

module.exports = notifyMe;