import { useCartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './checkout.scss';

const Checkout = () => {
  const { cartItems, totalPrice } = useCartContext();
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((product) => (
        <CheckoutItem key={product.id} cartItem={product} />
      ))}
      <span className='total'>Total: ${totalPrice}</span>
    </div>
  );
};
export default Checkout;
