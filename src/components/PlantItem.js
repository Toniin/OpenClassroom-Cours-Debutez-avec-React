import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem(props) {
  const { name, cover, id, light, water, bestSale, specialOffer } = props;

  function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
  }

  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
      {name}
      <div>
        {specialOffer && <div className="lmj-sales">Soldes</div>}
        {bestSale && <span className="lmj-best">Best 🔥</span>}
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
