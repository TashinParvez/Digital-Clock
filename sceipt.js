setInterval(() => {
    
    let x = new Date();
    let time = x.getHours() +":"+ x.getMinutes() +":"+ x.getSeconds();
    document.getElementById("time").innerHTML= time ;
    
}, 1000);



let xx = new Date();

let day = document.getElementById("day");
let p = xx.getDay();

let days=["Saturday"+ ",", "Sunday"+ ",","Monday"+ "," ,"Tuessday"+ "," ,"Wednesday"+ "," ,"Thursday"+ ",", "Friday"+ ","];
day.innerHTML= days[p];




let month = document.getElementById("month");
let m = xx.getMonth();

let months = ["January","February","March","April","May","June","July","August","September", "October", "November","December"]
month.innerHTML= months[m];


let date = document.getElementById("date");
date.innerHTML=xx.getDate() + ",";


let year = document.getElementById("year");
year.innerHTML=xx.getFullYear();










// console.log(p);
// let month = x.getMonth()  + 1 ;
// let time = x.getDate() +"/"+ month +"/"+ x.getFullYear() ;