import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem(props) {
  const { name, price, cover, light, water, bestSale, specialOffer } = props;

  return (
    <li className="lmj-plant-item">
      <div className="lmj-plant-item-cover">
        <img
          src={cover}
          alt={`${name} cover`}
        />
        {specialOffer && <div className="lmj-sales">Soldes</div>}
        {bestSale && <span className="lmj-best">Best 🔥</span>}
      </div>
      <div className="lmj-plant-item-text">
        <p>{name} - <span>{price}€</span></p>
        <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
        </div>
      </div>
    </li>
  );
}

export default PlantItem;
