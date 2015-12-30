var app = angular.module('QATool', []);
var meetingName=prompt("What is the name of your meeting?");
var main= function(){
  $("h1").text(meetingName);
};
$(document).ready(main);
