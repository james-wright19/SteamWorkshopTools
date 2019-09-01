/*
Name: functions/jam_requirements.js
Version: 1.0.1

Description: Functions to add requirements to collection + subscribe to them
*/

function jam_requirements_collectionAdd() {
  //Define the ID in which the requirements are found
  container = document.getElementById('RequiredItems');
  //Count the children :)
  count = container.childElementCount;

  //Loop through the children and add their id to an array
  for (i = 0; i < count; i++) {
    requirementID = container.children[i];
    requirementID = String(requirementID);
    requirementID = requirementID.slice(52);

    jam_collectionAdd(g_sessionID, collectionID, requirementID);
  }
}

//Function which subscribes to the required items
function jam_requirements_subscribe() {
  //Define the ID in which the requirements are found
  container = document.getElementById('RequiredItems');
  //Count the children :)
  count = container.childElementCount;

  //Loop through the children and add their id to an array
  for (i = 0; i < count; i++) {
    // A form is created and submitted which allows the items to be subscribed to
    requirementID = container.children[i];
    requirementID = String(requirementID);
    requirementID = requirementID.slice(52);
    var requirementForm = document.createElement("form");
    var e1 = document.createElement("input");
    var e2 = document.createElement("input");
    var e3 = document.createElement("input");

    requirementForm.method = "POST";
    requirementForm.action = "https://steamcommunity.com/sharedfiles/subscribe";

    //Adds element with value of the item
    e1.value=requirementID;
    e1.name="id";
    e1.type="hidden";
    requirementForm.appendChild(e1);

    //Adds element with value of the appid
    e2.value=appID;
    e2.name="appid";
    e2.type="hidden";
    requirementForm.appendChild(e2);

    //Add element with value of the session id (obtained from the steam website)
    e3.value=sessionID;
    e3.name="sessionid";
    e3.type="hidden";
    requirementForm.appendChild(e3);

    //Add the form to the body of the page
    document.body.appendChild(requirementForm);

    //Push the form
    requirementForm.request({
      onSuccess: function() {
        console.log(i)
      }
    });
  }
}
