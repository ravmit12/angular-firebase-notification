// -- `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// -- The list of file replacements can be found in `angular.json`.

/*Important Note*/
/***
 * Authentication Menu => Web Setup you => you can find your firebase credential
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: "your api key",
    authDomain: "your auth domain",
    databaseURL: "your databse url",
    projectId: "your project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your message sender id",
  }
};

