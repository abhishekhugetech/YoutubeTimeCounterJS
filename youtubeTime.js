// Select all the span that contains the duration of the Video.
var times = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer");

var arrayOfNum = []

for(let i = 0; i < times.length; i++){
    arrayOfNum[i] = times[i].innerHTML }
	
var arrayOfMinutes = []

for(let i = 0; i < arrayOfNum.length; i++){
    arrayOfMinutes[i] = arrayOfNum[i].replace(/\s/g, ""); }

var arrayOfSeconds = []

for(let i = 0; i < arrayOfMinutes.length; i++){
var input = arrayOfMinutes[i];
var fields = input.split(':');
var minToSec = parseInt(fields[0]*60);
var sec = parseInt(fields[1]);
var totalTime = minToSec + sec;
arrayOfSeconds[i] = totalTime;
 }	
 
var totalTime = null;

for(let i = 0; i < arrayOfSeconds.length; i++){
totalTime += arrayOfSeconds[i];					
 } 

function getTotalTime(){
    var seconds = totalTime;
    console.log("The total video in seconds is " + seconds + " seconds");
    var minutes = totalTime/60;
    console.log("The total video in minutes is " + minutes.toFixed(2) + " minutes");
    var hour = (totalTime/60)/60;
    console.log("The total video in hour is " + hour.toFixed(2) + " hour"); 
	} 

getTotalTime();
	