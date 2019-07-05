/*
Name: background.js
Version: 1.0.0

Description: File to initialise the plugin run on https://steamcommunity.com/sharedfiles/filedetails/?id=*
Note: at the moment this will also run on the pages for collections - need to figure out how to fix
*/

//Functions to inject scripts into the HTML of steam
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
function localScript(collectionID, node, varName) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.innerHTML = 'var ' + varName + ' = ' + collectionID;
    th.appendChild(s);
}

//Functions to fetch the GET values from the URL
function get() {
  var parts = window.location.search.substr(1).split("&");
  var $_GET = {};
  for (var i = 0; i < parts.length; i++) {
      var temp = parts[i].split("=");
      $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  return $_GET;
}

var get_values = get();
var url = String(window.location.href);

//Inject general function files (All with the prefix jam_)
injectScript(chrome.extension.getURL('functions/jam_notifications.js'), 'body');
injectScript(chrome.extension.getURL('functions/jam_collections.js'), 'body');
injectScript(chrome.extension.getURL('functions/jam_subscribe.js'), 'body');
injectScript(chrome.extension.getURL('functions/jam_util.js'), 'body');
injectScript(chrome.extension.getURL('functions/jam_requirements.js'), 'body');

if (url.indexOf("workshop/browse") !== -1) {
  injectScript(chrome.extension.getURL('functions/gridview.js'), 'body');
} else if ((url.indexOf("sharedfiles/filedetails") !== -1) && (get_values["id"].length >= 9)) {
  injectScript(chrome.extension.getURL('functions/itempage.js'), 'body');
}


//Collect stuff from chrome storage

//Get the variable collectionID from chrome storage and assign it to the variable collectionID then inject it onto the webpage
chrome.storage.sync.get(function(items) {
  var collectionID = items.collectionID;
  var requirements = items.requirements;
  localScript(collectionID, 'body', 'collectionID')
  localScript(requirements, 'body', 'requirements')
});
