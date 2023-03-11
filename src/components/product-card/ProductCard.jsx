import './product-card.scss';
import Button from '../UI/button/Button';

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <article className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </article>
  );
};
export default ProductCard;
