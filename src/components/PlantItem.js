import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem(props) {
  const { name, cover, id, light, water, bestSale, specialOffer } = props;

  function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
  }

  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <div className="lmj-plant-item-cover">
        <img
          src={cover}
          alt={`${name} cover`}
        />
        {specialOffer && <div className="lmj-sales">Soldes</div>}
        {bestSale && <span className="lmj-best">Best 🔥</span>}
      </div>
      <div className="lmj-plant-item-text">
        <p>{name}</p>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
