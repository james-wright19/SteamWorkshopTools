/*
Name: functions/subscribedItems.js (was collecitons.js)
Version: 1.0.1

Description: Functions for the page containing your subscribed files!
*/

//Add filter to the page (based on the tag)
function addFilter(filter) {
  window.location.href = window.location.href + '&requiredtags[]=' + filter;
}
