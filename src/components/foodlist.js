import { useState } from "react";
import foodDataJSON from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import FilterFood from "./search";

function FoodList() {
  const [foods, setFoods] = useState(foodDataJSON);
  const [allFoods, setAllFoods] = useState(foodDataJSON);

  const addNewFood = (foodObj) => {
    const updatedFood = [foodObj, ...foods];

    const updatedAllFoods = [foodObj, ...allFoods];

    setFoods(updatedFood);
    setAllFoods(updatedAllFoods);
  };

  const filterFoodList = (char) => {
    let filteredFoodList;
    if (char === "") {
      filteredFoodList = allFoods;
    } else {
      filteredFoodList = allFoods.filter((oneFood) => {
        return oneFood.name
          .toLocaleLowerCase()
          .includes(char.toLocaleLowerCase());
      });
    }
    setFoods(filteredFoodList);
  };

  const deleteFood = (foodName) => {
    const foundFood = foods.filter((food) => {
      return food.name !== foodName;
    });
    setFoods(foundFood);
  };

  return (
    <>
      <AddFoodForm addNewFood={addNewFood} />
      <h3>Food List</h3>
      <FilterFood filterFoodList={filterFoodList} />
      {foods.map((food) => {
        return (
          <div>
            <FoodBox food={food} deleteFood={deleteFood} />
          </div>
        );
      })}
      ;
    </>
  );
}

export default FoodList;
