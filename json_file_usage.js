//A template to read/write JSON file.
//REACT or other frontend JS is not a candidate to write JSON on disk.
//Pls use NODE.js

const fs = require('fs');

//if you would like to save something to disk, 
//or save data to MongoDB or others. (recommended, but it's not free if big data)
var obj = {
   table: []
};


// Read JSON. xbn.json is a splited file from openWeatherMap.org.
let rawdata = fs.readFileSync('./xbn.json');
let weatherDetails = JSON.parse(rawdata);

// Open the file and filter out something I need for example.
const newdata = weatherDetails.map(function(currentValue, index){
  if(currentValue.dt>= startTd && currentValue.dt <=endTd){
    obj.table.push(currentValue); //put the data I need to the obj.table
  }
});

//Write data to a new json file.
var json = JSON.stringify(obj);
fs.writeFile('./new.json', json, 'utf8', (err) => {
  if (err) throw err;
  console.log('Data written to file');
});




