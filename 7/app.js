// path
const path = require("path");
console.log(path.basename('a/b/c/d/e'));
console.log(path.basename('a/b/c/d/e.xls'));
console.log(path.basename('a/b/c/d/e.xls', '.xls'));

console.log(path.dirname('a/b/c/d/e.xls'));

console.log(path.extname('a/b/c/d/e.xls'));

console.log(path.parse("/home/samad/a/b/c/n.xls"));

