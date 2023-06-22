function notifyMe(obj)
{
    console.log('notification1');
    obj.on('NOTIFY', (data)=>{console.log('action');console.log(data)});


    obj.on('NOTIFY', (data)=>{console.log('next action');console.log(data)});

}

module.exports = notifyMe;