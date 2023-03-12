import { useCategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/categoru-preview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useCategoriesContext();

  return (
    <>
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview key={title} title={title} products={items} />
      ))}
    </>
  );
};
export default CategoriesPreview;
