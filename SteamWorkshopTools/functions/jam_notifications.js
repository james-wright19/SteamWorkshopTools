/*
Name: functions/jam_notifications.js (was collecitons.js)
Version: 1.0.1

Description: Notifications System for my plugin (styles may be changed later)
*/

function jam_notificationSetup() {
  var notification_holder = document.createElement("div");
  notification_holder.id = "notification_holder";
  document.body.appendChild(notification_holder);
}

//Function to display notifications
function jam_notificationAdd(msg, time) {
  //Create Elements
  var notification = document.createElement("div");

  //Create text nodes
  var t = document.createTextNode(msg);

  //Add classes
  notification.className = "notification";

  //Append children to notification and body
  notification.appendChild(t);
  document.getElementById("notification_holder").appendChild(notification);

  //Set timer to remove
  window.setTimeout(jam_notificationRemove, time);
}

//Function to remove notifications
function jam_notificationRemove() {
  var paras = document.getElementsByClassName('notification');

  while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
  }
}

function jam_error_function(functionName) {
  return ("There was an error running the function " + functionName);
}
