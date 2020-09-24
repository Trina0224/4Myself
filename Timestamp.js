// How to get current UNIX timestamp? How to get a specific timestamp of specific time?
// Answer:

//Step 0. Current unix timestamp
const current= new Date().getTime(); //you will get a number in 'ms'
console.log(current/1000); 

//Step.1 Get current timezone
var offset = new Date().getTimezoneOffset();
console.log(offset*60); //because offset is in minute. *60 to get it back to second. 

//Step.2 Select a data which we would like to check timestamp. 
let startTd = new Date('2020.09.24 0:0:0').getTime() / 1000; //it's not UTC time.
console.log(startTd);

//Step.3 Apply offset to Generated final unix timestamp. //shift it back to UTC. 
startTd -= (offset*60); 
console.log(`Adjusted: ${startTd}`);


//From Unix Timestamp to Date
let timestamp = 1598918400;
var date = new Date(timestamp * 1000);
console.log(date);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();
// time in xx:yy:zz format
var formatted = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(formatted);

//or a simple one: It's UTC time. 
var dateUTC = new Date(timestamp * 1000).toUTCString();
console.log(dateUTC);

