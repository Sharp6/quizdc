// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCx7SuB7xC5Drl9PpBTbPEpqI8xxq9JLQ8",
    authDomain: "caluwequiz.firebaseapp.com",
    databaseURL: "https://caluwequiz.firebaseio.com",
    projectId: "caluwequiz",
    storageBucket: "caluwequiz.appspot.com",
    messagingSenderId: "964200309415"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
