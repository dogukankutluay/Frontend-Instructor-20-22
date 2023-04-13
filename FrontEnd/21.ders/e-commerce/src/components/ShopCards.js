import "../styles/ShopCards.css";
import sc1 from "../assets/images/sc-1.png";
import sc2 from "../assets/images/sc-2.png";
import sc3 from "../assets/images/sc-3.png";

/**
 *const ShopCardInfo = (params) => {
  console.log(params.test);
 */
const ShopCardInfo = ({ info }) => {
  return (
    <div className="shop-card-info">
      <h3>{info}</h3>
      <button>EXPLORE ITEMS</button>
    </div>
  );
};

const ShopCards = () => {
  return (
    <section className="shop-cards-container">
      <div className="shop-cards">
        <div className="left-content-sc">
          <img src={sc1} />
          <ShopCardInfo info={"Top Product Of the Week 1"} />
        </div>
        <div className="right-content-sc">
          <div className="right-top-content">
            <img src={sc2} />
            <ShopCardInfo info={"Top Product Of the Week 2"} />
          </div>
          <div className="right-bottom-content">
            <img src={sc3} />
            <ShopCardInfo info={"Top Product Of the Week 3"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopCards;
