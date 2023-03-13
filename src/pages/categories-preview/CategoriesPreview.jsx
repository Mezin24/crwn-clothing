import CategoryPreview from '../../components/categoru-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { selectCategoryMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);

  return (
    <>
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview key={title} title={title} products={items} />
      ))}
    </>
  );
};
export default CategoriesPreview;
