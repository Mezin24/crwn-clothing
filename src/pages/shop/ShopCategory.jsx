import { useParams } from 'react-router-dom';
import { useCategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/ProductCard';

const ShopCategory = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();

  if (!categoriesMap[category]) {
    return <h1>Loading...</h1>;
  }

  const goods = categoriesMap[category];
  return (
    <>
      <h2>{category}</h2>
      <div className='products-container'>
        {goods.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
export default ShopCategory;
