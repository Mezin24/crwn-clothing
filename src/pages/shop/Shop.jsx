import { useProductContext } from '../../context/product.context';
import ProductCard from '../../components/product-card/ProductCard';
import './shop.scss';

const Shop = () => {
  const { products } = useProductContext();
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};
export default Shop;
