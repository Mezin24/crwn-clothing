import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { useCategoriesContext } from '../../context/categories.context';
import styles from './category.module.scss';

const Category = () => {
  const [products, setproducts] = useState();
  const { categoriesMap } = useCategoriesContext();
  const { category } = useParams();

  useEffect(() => {
    setproducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className={styles.title}>{category}</h2>
      <div className={styles['category-container']}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
export default Category;
