import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';
import { useProductContext } from '../../context/product.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { showCartDropdown } = useProductContext();
  console.log(showCartDropdown);

  return (
    <header className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
          <span className='nav-link' onClick={signOutUser}>
            Sign out
          </span>
        ) : (
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {showCartDropdown && <CartDropdown />}
    </header>
  );
};

export default Navigation;
