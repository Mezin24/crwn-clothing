import SignUp from '../components/sign-up/SignUp';
import SignIn from '../components/sign-in/SignIn';

import './authentication.scss';

const SignInForm = () => {
  return (
    <div className='auth-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInForm;
