import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce((accumulator, currentPlant) => {
    // return accumulator.includes(currentPlant.category) ? accumulator : accumulator.concat(currentPlant.category)
    if (accumulator.includes(currentPlant.category)) {
      return accumulator;
    } else {
      return accumulator.concat(currentPlant.category);
    }
  }, []);

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map((plant) =>
          !activeCategory || activeCategory === plant.category ? (
            <div key={plant.id}>
              <PlantItem
                // key={plant.id} // Obligé quand y'a pas la div englobante alors que le li du composant à une key props
                name={plant.name}
                price={plant.price}
                cover={plant.cover}
                light={plant.light}
                water={plant.water}
                bestSale={plant.isBestSale}
                specialOffer={plant.isSpecialOffer}
              />
              <button onClick={() => addToCart(plant.name, plant.price)}>
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
