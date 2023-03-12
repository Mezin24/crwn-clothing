import { Fragment } from 'react';
import { useCategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/ProductCard';
import './shop.scss';

const Shop = () => {
  const { categoriesMap } = useCategoriesContext();

  return (
    <Fragment>
      {Object.entries(categoriesMap).map(([title, items]) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {items.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};
export default Shop;
