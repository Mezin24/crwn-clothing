import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useProductContext } from '../../context/product.context';
import './cart-icon.scss';

const CartIcon = () => {
  const { setShowCartDropdown, showCartDropdown } = useProductContext();

  return (
    <div
      className='cart-icon-container'
      onClick={() => setShowCartDropdown((prev) => !prev)}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>3</span>
    </div>
  );
};
export default CartIcon;
