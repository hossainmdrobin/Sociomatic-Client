import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, app } from './config';

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
}
export const facebookLogin = (setData) => {
  const provider = new FacebookAuthProvider()
  let data = null;
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // console.log("user:", user);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      // console.log("credential:", credential);
      // console.log(accessToken);

      data =  {
        socialId: user.providerData[0]?.uid,
        name: user.displayName,
        email: user.email,
        token: accessToken,
        photo: user.photoURL,
        accountType: "facebook",
      }
      setData(data);
      localStorage.setItem("account_data", JSON.stringify(data));
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("error:", error);
      data = error;
      // ...
      localStorage.setItem("account_error", JSON.stringify(data));
    });
    return data

}