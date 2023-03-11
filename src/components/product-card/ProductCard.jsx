import './product-card.scss';
import Button from '../UI/button/Button';
import { useCartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price, id } = product;
  const { addItemToCart } = useCartContext();
  return (
    <article className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addItemToCart(product)}>
        Add to card
      </Button>
    </article>
  );
};
export default ProductCard;
