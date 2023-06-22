const MClass = require('./MyClass');

const mc = new MClass();
require('./MyEvents')(mc); // send data to module


mc.insertIntoDb(
    {
        name:'samad',
        lastname:'ghanbari'
    }
)
