// this
console.log(this)

function aa(a)
{
    console.log(this);
}


//aa(2);

class ab 
{
    constructor(){console.log(this)}
}

let b = new ab();