/***
 * Give the service worker access to Firebase Messaging.
 * Note that you can only use Firebase Messaging here, other Firebase libraries
 */


importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


/***
 * 1. Initialize the Firebase app
 * 2. messagingSenderId is your server Server key --> Project Overview => Press on setting icon => Cloud Messaging  =>you can find your server key
 */

firebase.initializeApp({
  'messagingSenderId': 'AAAAe6sE4WI:APA91bFZONtGz94b2zGzDUtKJ4JIprFOuaxoZh-XOwKj7hYGCfkD_BxabalMdy6cSBeykCthSwyANW4ZgOA6fpksxvgT-6TC9hnliphZpVoFhbhdLfEOzXt4mOMsoPM5dDl5otXbos5l'
});

/**
 *Retrieve an instance of Firebase Messaging so that it can handle background
 * messages.
 */

const messaging = firebase.messaging();
