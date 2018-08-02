// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyDJITLdKvU5_pVy2JBq98ZW4KcW7se8Nq4",
  authDomain: "contact-form-32637.firebaseapp.com",
  databaseURL: "https://contact-form-32637.firebaseio.com",
  projectId: "contact-form-32637",
  storageBucket: "",
  messagingSenderId: "891796431151"
},


contentful: {
  spaceId: '3bh985ibn6ee',
  token: 'a8801431cea8f387eb2c86780b2c945508ab0fc4baf2b272e7fdb4c394375efa'
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
