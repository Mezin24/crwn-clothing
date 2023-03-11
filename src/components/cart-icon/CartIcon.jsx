import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';
import { useCartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { setShowCart } = useCartContext();
  return (
    <div
      className='cart-icon-container'
      onClick={() => setShowCart((prev) => !prev)}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>3</span>
    </div>
  );
};
export default CartIcon;
