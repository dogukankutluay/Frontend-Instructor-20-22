import Header from "./components/Header";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import ShopCards from "./components/ShopCards";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Clients />
      <ShopCards />
    </div>
  );
}

export default App;
