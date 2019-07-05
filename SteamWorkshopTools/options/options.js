/*
Name: options.js
Version: 1.0.0

Description: Functions to save and restore options + event listener
  for save button click (code copied and modified from google documnentation)
*/

// Saves options to chrome.storage
function save_options() {
  var collectionID = document.getElementById('collectionID').value;
  var requirements = document.getElementById('requirements').checked;
  chrome.storage.sync.set({
    collectionID: collectionID,
    requirements: requirements
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    collectionID: 'Enter the id of your collection',
    requirements: true
  }, function(items) {
    document.getElementById('collectionID').value = items.collectionID;
    document.getElementById('requirements').checked = items.requirements;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener("click", function(e) {
    save_options();
}, false);
