/*
Name: functions/jam_subscribe.js (was collecitons.js)
Version: 1.0.1

Description: All functions related to subscriptions (excluding the default steam ones)
*/

//Subscribe function (other inbuilt functions but this works globally)
//Session ID should be on the page of the usage already
function jam_subscribe(id, app, session) {
  var requirementForm = document.createElement("form");
  var e1 = document.createElement("input");
  var e2 = document.createElement("input");
  var e3 = document.createElement("input");

  requirementForm.method = "POST";
  requirementForm.action = "https://steamcommunity.com/sharedfiles/subscribe";

  //Adds element with value of the item
  e1.value=id;
  e1.name="id";
  e1.type="hidden";
  requirementForm.appendChild(e1);

  //Adds element with value of the appid
  e2.value=app;
  e2.name="appid";
  e2.type="hidden";
  requirementForm.appendChild(e2);

  //Add element with value of the session id (obtained from the steam website)
  e3.value=session;
  e3.name="sessionid";
  e3.type="hidden";
  requirementForm.appendChild(e3);

  //Add the form to the body of the page
  document.body.appendChild(requirementForm);

  //Push the form
  requirementForm.request({
    onSuccess: function() {
      jam_notificationAdd("Subscribed to an item - id is " + id, 10000);
    }
  });
}
