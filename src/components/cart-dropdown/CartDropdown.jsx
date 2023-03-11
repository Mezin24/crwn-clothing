import Button from '../UI/button/Button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem';
import { useCartContext } from '../../context/cart.context';

const CartDropdown = () => {
  const { cartItems } = useCartContext();
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <Button>go to checkout</Button>
    </div>
  );
};
export default CartDropdown;
