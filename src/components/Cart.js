import "../styles/Cart.css";
import { useState } from "react";

function Cart() {
  const monsteraPrice = 8;
  // const ivyPrice = 10;
  // const flowerPrice = 15;

  const [isOpen, setIsOpen] = useState(false);
  const [cart, updateCart] = useState(0);
  // const cartState = useState(0);
  // const cart = cartState[0]; => VALEUR ACTUELLE
  // const updateCart = cartState[1]; => FONCTION QUI PERMET DE MODIFIER cart

  // useState = [
  //  VALEUR ACTUELLE,
  //  FONCTION QUI MODIFIE LA VALEUR ACTUELLE
  // ]

  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>Fermer</button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button onClick={() => setIsOpen(true)} className="lmj-cart-toggle-button">
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
