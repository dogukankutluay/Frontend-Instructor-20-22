import Header from "./components/Header";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import ShopCards from "./components/ShopCards";
import Products from "./components/Products";
import ProductContent from "./components/ProductContent";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Clients />
      <ShopCards />
      <Products />
      <ProductContent />
      <Posts />
    </div>
  );
}

export default App;
