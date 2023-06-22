const DbMan = require('./db');

const dbMan = new DbMan();
require('./appEvents')(dbMan); // send data to module


dbMan.actionOne(
    {
        name:'samad',
        lastname:'ghanbari'
    }
)
