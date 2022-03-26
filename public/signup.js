var firebase = require('firebase');
var firebaseui = require('firebaseui');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ],
    // Is there an email link sign-in?
    if (ui.isPendingRedirect()) {
        ui.start('#firebaseui-auth-container', uiConfig);
    }
    // This can also be done via:
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        ui.start('#firebaseui-auth-container', uiConfig);
  }  
});