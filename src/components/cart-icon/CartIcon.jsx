import { useCartContext } from '../../context/cart.context';
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.component';

const CartIcon = () => {
  const { setShowCart, totalQuantity } = useCartContext();

  return (
    <CartIconContainer onClick={() => setShowCart((prev) => !prev)}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
