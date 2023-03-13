import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCartContext } from '../../context/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { showCart } = useCartContext();

  return (
    <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo className='logo' />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>SHOP</NavLink>
        {currentUser ? (
          <NavLink as='span' onClick={signOutUser}>
            Sign out
          </NavLink>
        ) : (
          <NavLink to='/auth'>SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {showCart && <CartDropdown />}
    </NavigationContainer>
  );
};

export default Navigation;
