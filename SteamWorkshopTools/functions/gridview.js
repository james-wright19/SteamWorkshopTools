/*
Name: functions/gridview.js (was collecitons.js)
Version: 1.0.1

Description: Subscribe + Add to collection in steam workship "grid" view (https://steamcommunity.com/workshop/browse/)

Version info at bottom!
*/

//Init notifications
jam_notificationSetup();

var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

//Array of all workshopItem elements
var items = document.getElementsByClassName('workshopItem');

//Loop through all items with class workshopItem and then create buttons + add event listener for subscribe + add to collection
for (var i = 0; i < items.length; i++) {
  var value = String(items[i].children[0]);
  value = value.slice(55, 66);
  
  if (value.includes("&")) {
    value = value.slice(0,-1)
  }

  var btn = document.createElement("BUTTON"); // Create button
  var t = document.createTextNode("Subscribe");
  btn.appendChild(t);
  btn.id = value;
  btn.className += "gridview-button";
  //btn.style.padding = '0px 20px'
  items[i].insertBefore(btn, items[i].children[1]);

  document.getElementById(value).addEventListener("click", function(e) {
    var clicked_id = e.target.id;

    jam_subscribe(clicked_id, $_GET['appid'], g_sessionID);
    jam_collectionAdd(g_sessionID, collectionID, clicked_id);
  }, false);

  //Create button for add to collection and add event listener
  var value = String(items[i].children[0]);
  value = value.slice(55, 66);
  
  if (value.includes("&")) {
    value = value.slice(0,-1)
  }

  value = value + "c";
  var btn = document.createElement("BUTTON"); // Create button
  var t = document.createTextNode("Add to Collection");
  btn.appendChild(t);
  btn.id = value;
  btn.className += "gridview-button collection";
  //btn.style.padding = '0px 20px'
  items[i].insertBefore(btn, items[i].children[2]);

  document.getElementById(value).addEventListener("click", function(e) {
    item_id = this.id;
    item_id = item_id.slice(0,-1);
    jam_collectionAdd(g_sessionID, collectionID, this.id);
  }, false);
}
