
//let person = {name:'samad', position: 'expert'};
//exports.person = person;

//exports.person = {name:'samad', position: 'expert'};

/*
module.exports = {
	person:{name:'samad', position: 'expert'},
	num: 10,
	square: function(x){return (x*x);}
	};*/
	
	
let number = function(x){return x*10;};
let name = function(){return 'samad';};
let age = 30;

exports.number = number;
exports.name = name;
exports.age = age;
