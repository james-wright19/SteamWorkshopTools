/*
Name: functions/jam_collections.js
Version: 1.0.1

Description: All functions related to collections
*/

//Function to add items to collections
function jam_collectionAdd(session, collection, fileID) {
  //Set params for collection addition
  var params = {
  	'sessionID' : session,
  	'publishedfileid' : fileID
  };

  //Sets the parameters to enable the item to be added to the collection
  var inputs = $J( fileID );
  params['collections[' + collection + '][add]'] = true;
  params['collections[' + collection + '][title]'] = $J( fileID ).data( 'title' );

  //Send request to add to collection and give a notificated if successful
  $J.post( 'https://steamcommunity.com/sharedfiles/ajaxaddtocollections',
  	params
  ).done( function( data ){
    jam_notificationAdd("Added an item to your collection - id is " + fileID, 10000);
  }).fail( function( jqxhr ) {
    jam_notificationAdd("Failed to add an item to your collection (usually already in collection) - id is " + fileID, 10000);
  });
}
