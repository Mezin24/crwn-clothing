import Button from '../UI/button/Button';
import './cart-dropdown.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>go to checkout</Button>
    </div>
  );
};
export default CartDropdown;
