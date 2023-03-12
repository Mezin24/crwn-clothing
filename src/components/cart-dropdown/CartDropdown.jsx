import Button from '../UI/button/Button';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.component';
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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => goToCheckout()}>go to checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
