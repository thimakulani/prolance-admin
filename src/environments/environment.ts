// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD3D9Eu2uwuUFlqe8jyJ1i8ZCWacoDqdhg",
    authDomain: "prolance-3046f.firebaseapp.com",
    projectId: "prolance-3046f",
    storageBucket: "prolance-3046f.appspot.com",
    messagingSenderId: "56902053793",
    appId: "1:56902053793:web:ed0c708721c14d3fbd25e0",
    measurementId: "G-X022PG6JCR"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
