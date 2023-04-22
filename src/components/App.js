import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import "../styles/layout.css"

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <QuestionForm />
      <Footer />
    </div>
  );
}

export default App;
