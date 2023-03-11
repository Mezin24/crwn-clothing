import Button from '../UI/button/Button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem';
import { useCartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, setShowCart } = useCartContext();
  const navigate = useNavigate();

  const goToCheckout = () => {
    setShowCart(false);
    navigate('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <Button onClick={() => goToCheckout()}>go to checkout</Button>
    </div>
  );
};
export default CartDropdown;
