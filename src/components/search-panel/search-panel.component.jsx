import "./search-panel.styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchCategory,
  setSearchText,
} from "../../redux/actions/search-actions";
import RadioInput from "../radio-input/radio-input.component";

const SearchPanel = () => {
  const categories = useSelector((state) => state.search.categories);
  const searchText = useSelector((state) => state.search.searchText);
  const chosenCategory = useSelector((state) => state.search.chosenCategory);
  const dispatcher = useDispatch();

  const onCategoryChangeHandler = (category) => {
    dispatcher(setSearchCategory(category));
  };

  const onChangeSearchHandler = (text) => {
    dispatcher(setSearchText(text));
  };

  return (
    <div className="search-panel">
      <h3>Search Articles</h3>
      <input
        type="search"
        name="search"
        placeholder="Just start to enter..."
        value={searchText}
        onChange={(e) => onChangeSearchHandler(e.target.value)}
      />
      <div className="category">
        {" "}
        <h3>Category</h3>
        <div
          className="radio"
          onChange={(e) => onCategoryChangeHandler(e.target.value)}
        >
          {categories.map((category, i) => (
            <RadioInput
              key={i}
              category={category}
              checked={category === chosenCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
