import "./directory.styles.scss";

import CategoryItem from "../category-item/category-item.component.jsx";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Directory;
