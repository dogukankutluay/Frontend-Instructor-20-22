import "../styles/ProductContent.css";

import content1 from "../assets/images/content-1.png";
import content2 from "../assets/images/content-2.png";

const LeftContent = () => {
  return (
    <div className="product-left-content">
      <img src={content1} />
      <img src={content2} />
    </div>
  );
};
const RightContent = () => {
  return (
    <div className="product-right-content">
      <h5>Featured Products</h5>
      <h2>We love what we do</h2>
      <p>
        Problems trying to resolve the conflict between the two major <br />
        realms of Classical physics: Newtonian mechanics.
      </p>
      <p>
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </p>
    </div>
  );
};
const ProductContent = () => {
  return (
    <section className="product-content-container">
      <LeftContent />
      <RightContent />
    </section>
  );
};

export default ProductContent;
