import { useCartContext } from '../../context/cart.context';
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.component';

const CartIcon = () => {
  const { setShowCart, totalQuantity, showCart } = useCartContext();

  return (
    <CartIconContainer onClick={() => setShowCart(!showCart)}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
