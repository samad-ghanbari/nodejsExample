//url 
const myUrl = new URL('http://abc.com:8080/a/index.html');
//console.log(myUrl);

const myUrl2 = new URL('index.php', 'http://aaa.com:6060');
//console.log(myUrl2);



const url = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
//console.log(url);
//console.log(url.searchParams);

var sp = new URLSearchParams("a=1&b=2&c=3");
console.log(sp);
console.log(sp.toString());
sp.append("d", 4);
sp.delete("a");
console.log(sp.get('b'));
sp.set("c", "30");
console.log(sp);

var query = url.searchParams.get("query");
console.log(query);


console.log("_____________________");
var qp = new URLSearchParams({'a':1, 'b':2, 'c':3});
console.log(qp.toString());

var qp = new URLSearchParams([ ['a',1], ['b',2], ['c',3] ]);
console.log(qp.toString());

console.log(qp.entries());

var sp2 = new URLSearchParams("a=10&b=20&c=30");
for(let j of sp2.entries())
    console.log(j);

console.log("_____________________");


let params = {'a':1, 'b':2, 'c':3, 'd':4}; // for in
for(let i in params)
    console.log(i+' = '+ params[i]);

    console.log("\n\n\n");

let par = {'a':1, 'b':2, 'c':3, 'd':4}; // for of
console.log(Object.entries(par));
for(let i of Object.entries(par))
    console.log(i);

console.log('\n - - - - - -');
let p = [ ['aa', 11] ,['bb', 22] ,['cc', 33],['dd', 44] ];
for(let k in p) console.log(k);
console.log('\n');
for(let k of p) console.log(k);


let a = ['a','b', 'c', 'd'];
for(let k in a) console.log(k);
for(let k of a) console.log(k);
