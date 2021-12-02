import { useState } from "react";
import { Input } from "antd";

function FilterFood({ filterFoodList }) {
  const [firstLetter, setFirstLetter] = useState("");
  const handleSearch = (event) => {
    setFirstLetter(event.target.value);
    filterFoodList(event.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <label>Search for a food</label>
      <Input
        name="search"
        type="text"
        placeholder=""
        value={firstLetter}
        onChange={handleSearch}
      />
    </div>
  );
}

export default FilterFood;
