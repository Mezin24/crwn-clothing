import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../UI/button/Button';
import './sign-up.scss';

const defaultFileds = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFileds, setFormFileds] = useState(defaultFileds);
  const { displayName, email, password, confirmPassword } = formFileds;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFileds({ ...formFileds, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!displayName || !email || !password || password !== confirmPassword)
      return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth({
        ...user,
        displayName,
      });
      console.log(userDocRef);
      setFormFileds(defaultFileds);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Cannot create user, email already exists');
      }
      console.log('error with creating user', user.message);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          required={true}
          type='text'
          value={displayName}
          name='displayName'
          onChange={changeHandler}
        />

        <FormInput
          label='Email'
          type='email'
          required
          value={email}
          name='email'
          onChange={changeHandler}
        />

        <FormInput
          label='Password'
          type='password'
          required
          value={password}
          name='password'
          onChange={changeHandler}
        />

        <FormInput
          label='Confirm password'
          type='password'
          required
          value={confirmPassword}
          name='confirmPassword'
          onChange={changeHandler}
        />
        <Button type='submit'>Sign Up</Button>
        {/* <button type='submit'>Sign Up</button> */}
      </form>
    </div>
  );
};
export default SignUp;
