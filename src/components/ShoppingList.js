import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";

function ShoppingList() {
  // const plantListPerId = plantList.reduce((accumulator, currentPlant) => {
  //   // Destructurer pour récuperer l'id d'un côté et un objet avec les autres propriétés de l'autre
  //   const { id, ...otherProps } = currentPlant

  //   accumulator[currentPlant.id] = otherProps
  //   return accumulator
  // }, {})

  const categories = plantList.reduce((accumulator, currentPlant) => {
    // return accumulator.includes(currentPlant.category) ? accumulator : accumulator.concat(currentPlant.category)
    if (accumulator.includes(currentPlant.category)) {
      return accumulator;
    } else {
      return accumulator.concat(currentPlant.category);
    }
  }, []);

  return (
    <div className='lmj-shopping-list'>
      {/* POURQUOI JE PEUX PAS MAP L'OBJET plantListPerId ? */}
      {/* <ul>
      {plantListPerId.map((plant) => (
        <li>{"test"}</li>
      ))}
      </ul> */}
      <ul className="lmj-plant-categories">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem
            key={plant.id} // On peut pas faire autrement ?
            name={plant.name}
            cover={plant.cover}
            id={plant.id}
            light={plant.light}
            water={plant.water}
            bestSale={plant.isBestSale}
            specialOffer={plant.isSpecialOffer}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
