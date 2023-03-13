import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoryMap } from '../../store/categories/category.selector';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import styles from './category.module.scss';

const Category = () => {
  const [products, setProducts] = useState();
  const categoriesMap = useSelector(selectCategoryMap);
  const { category } = useParams();

  useEffect(() => {
    setProducts(categoriesMap[category]);
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
