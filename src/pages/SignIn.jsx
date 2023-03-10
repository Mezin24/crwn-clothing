import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};
export default SignIn;
