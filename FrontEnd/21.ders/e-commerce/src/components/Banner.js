import "../styles/Banner.css";

import hero from "../assets/images/hero.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="left-content">
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="right-content">
          <img src={hero} />
        </div>
      </div>
    </div>
  );
};
export default Banner;
