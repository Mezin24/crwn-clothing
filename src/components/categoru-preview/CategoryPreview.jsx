import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`/shop/${title}`}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
