/*
Name: functions/itempage.js (was collecitons.js)
Version: 1.0.2

Description: Subscribe to item + add it to collectio and repeat for all of the required items
To do: add method of check if already in collection/subscribed (collection may not be possible)

Version info at bottom!
*/

//Check to make sure that the page is an item page then run scripts
if (jam_hasClass('item', 'ig_bottom')) {
  //Init notifications
  jam_notificationSetup();

  //Define some variables
  //Get appid & sessionID - from a form on the page
  var appID = String(document.getElementById("PublishedFileSubscribe").children[1].value);
  var sessionID = String(document.getElementById("PublishedFileSubscribe").children[2].value);

  //Alternate code that does the same thing (works when logged out - forgot to log in!)
  /* var appID = String(document.getElementsByClassName("breadcrumbs")[0].children[0]).slice(31);
  var sessionID = SESSION_ID; */


  //Function to create buttons
  function createButton(text, id, elementClass, locationClass) {
    var btn = document.createElement("BUTTON"); // Create button
    var t = document.createTextNode(text);
    btn.appendChild(t);
    btn.id = id;
    btn.className += elementClass;
    btn.style.padding = '0px 20px'
    document.getElementsByClassName(locationClass)[0].appendChild(btn);
  }

  //Create add button classes from steamcommunity.com css
  //If statement to determine if the item has already been subscribed to
  if (document.getElementById('SubscribeItemOptionAdd').classList.contains('selected')) {
    createButton("Sub + Add", "addButton", "btn_green_white_innerfade btn_border_2px btn_medium subscribeOption subscribe selected button-position-itempage", "game_area_purchase_game");
    document.getElementById("addButton").addEventListener("click", function(e) {
      SubscribeItem(); //Automatically subscribe to item when event is triggered!
      jam_collectionAdd(g_sessionID, collectionID, publishedfileid);
      //Subscribe to requirements if clicked (and the option is enabled)
      if (requirements == true) {
        jam_requirements_collectionAdd();
        jam_requirements_subscribe();
      }
    }, false);
  } else {
    createButton("Already Subbed", "", "btn_green_white_innerfade btn_border_2px btn_medium subscribeOption subscribe selected button-position-itempage", "game_area_purchase_game");
  }

  //Creates add to collection button and then add an event listener to add the item to collection when it is clicked
  createButton("Add to collection", "colButton", "btn_green_white_innerfade btn_border_2px btn_medium subscribeOption subscribe selected button-position-itempage", "game_area_purchase_game");
  document.getElementById("colButton").addEventListener("click", function(e) {
    jam_collectionAdd(g_sessionID, collectionID, publishedfileid);
    if (requirements == true) {
      jam_requirements_collectionAdd();
    }
  }, false);
}
