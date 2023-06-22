const jalali = require("jalali-moment");
var date = jalali("2022/09/29", "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");
console.log(date);