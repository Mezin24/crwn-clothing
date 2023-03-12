import CategoryItem from './CategoryItem';

import { DirectoryContainer } from './category-list.component';

const CategoryList = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default CategoryList;
