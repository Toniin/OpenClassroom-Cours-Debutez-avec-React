import "../styles/Cart.css";
import { useState, useEffect } from "react";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((accumulator, plantType) => {
    return accumulator + plantType.amount * plantType.price;
  }, 0);

  const [isOpen, setIsOpen] = useState(false);
  // const isOpenState = useState(false);
  // const isOpen = isOpenState[0]; => VALEUR ACTUELLE
  // const updateIsOpen = isOpenState[1]; => FONCTION QUI PERMET DE MODIFIER isOpen

  const testGit = test
  // useState = [
  //  VALEUR ACTUELLE,
  //  FONCTION QUI MODIFIE LA VALEUR ACTUELLE
  // ]

  localStorage.setItem("totalCart", total);
  var totalCart = localStorage.getItem("totalCart");
  console.log("Total du panier", totalCart);

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => {
        return (
          <p key={`${name}-${index}`}>
            <span>{name}</span>
            <span className="lmg-cart-quantity">
              {price}€ x {amount}
            </span>
          </p>
        );
      })}
      <h3>Total : {totalCart}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        onClick={() => setIsOpen(true)}
        className="lmj-cart-toggle-button"
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
