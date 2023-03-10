import { async } from '@firebase/util';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../UI/button/Button';
import './sign-in.scss';

const defaultValue = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [userInput, setUserInput] = useState(defaultValue);
  const { email, password } = userInput;

  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        toast.error('Wrong password');
      }

      if (error.code === 'auth/user-not-found') {
        toast.error("User doesn' exist");
      }
      console.log(error);
    }
  };
  return (
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label='email'
          required={true}
          type='email'
          value={email}
          onChange={changeHandler}
          name='email'
        />
        <FormInput
          label='password'
          required={true}
          type='password'
          value={password}
          onChange={changeHandler}
          name='password'
        />
        <div className='btn-container'>
          <Button type='submit'>sign in</Button>
          <Button buttonType='google' type='button' onClick={signInwithGoogle}>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
