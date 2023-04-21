import "../styles/ShoppingList.css";
import { plantList } from "../datas/plantList";

function ShoppingList() {
  const plantListPerId = plantList.reduce((accumulator, currentPlant) => {
    // Destructurer pour récuperer l'id d'un côté et un objet avec les autres propriétés de l'autre
    const { id, ...otherProps } = currentPlant
    
    accumulator[currentPlant.id] = otherProps
    return accumulator
  }, {})
  console.log(plantListPerId);
  console.log(plantList);

  const categories = plantList.reduce((accumulator, currentPlant) => {
    // return accumulator.includes(currentPlant.category) ? accumulator : accumulator.concat(currentPlant.category)
    if (accumulator.includes(currentPlant.category)) {
      return accumulator;
    } else {
      return accumulator.concat(currentPlant.category);
    }
  }, []);

  return (
    <div>
      {/* POURQUOI JE PEUX PAS MAP L'OBJET plantListPerId ? */}
      {/* <ul>
      {plantListPerId.map((plant) => (
        <li>{plant.name}</li>
      ))}
      </ul> */}
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {/* {plant.isBestSale ? <span>🔥</span> : null} */}
            {/* Précise que l'élément ne sera généré que si la condition est respectée */}
            {plant.isBestSale && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
