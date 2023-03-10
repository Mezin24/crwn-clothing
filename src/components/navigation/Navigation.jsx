import { Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.scss';

const Navigation = () => {
  return (
    <header className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
