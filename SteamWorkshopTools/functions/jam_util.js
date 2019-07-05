/*
Name: functions/jam_util.js
Version: 1.0.1

Description: Functions that have no specific purpose (used extension wide)
*/

//Functions to fetch the GET values from the URL
function jam_get() {
  var parts = window.location.search.substr(1).split("&");
  var $_GET = {};
  for (var i = 0; i < parts.length; i++) {
      var temp = parts[i].split("=");
      $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  return $_GET;
}

//Function that returns true/false depending on if it has a certain class
function jam_hasClass(className, id = null, element = null) {
  if(element == null) {
    element = document.getElementById(id);
  }
  if(element == null && id == null) {
    jam_notificationAdd(jam_error_function("jam_hasClass"), 5000);
  } else {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }
}
