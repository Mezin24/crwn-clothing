import './checkout-item.scss';
import { useCartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const { deleteProductFromCart, addItemToCart, decreaseItemQuantity } =
    useCartContext();

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <button className='arrow' onClick={decreaseItemQuantity.bind(null, id)}>
          &#10094;
        </button>
        {quantity}
        <button className='arrow' onClick={addItemToCart.bind(null, cartItem)}>
          &#10095;
        </button>
      </div>
      <span className='price'>{price}</span>
      <button
        className='remove-button'
        onClick={deleteProductFromCart.bind(null, id)}
      >
        &#10005;
      </button>
    </div>
  );
};
export default CheckoutItem;
