import "../styles/Header.css";
import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email.svg";

import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
import dropdownIcon from "../assets/icons/dropdown.svg";

import userIcon from "../assets/icons/user.svg";
import cardIcon from "../assets/icons/card.svg";
import searchIcon from "../assets/icons/search.svg";
import favoriteIcon from "../assets/icons/favorite.svg";

import logo from "../assets/images/logo.png";

const Header = () => {
  //JSX
  return (
    <section className="header">
      <div className="header-dark">
        <div className="contact">
          <p>
            <img src={phoneIcon} />
            (225) 555-0118
          </p>
          <p>
            <img src={emailIcon} /> michelle.rivera@example.com
          </p>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className="social-media">
          <p>Follow Us : </p>
          <img src={instagramIcon} />
          <img src={youtubeIcon} />
          <img src={facebookIcon} />
          <img src={twitterIcon} />
        </div>
      </div>
      <div className="header-light">
        <div className="logo-and-category">
          <img src={logo} />
          <div className="category">
            <p>Home</p>
            <p>
              Shop
              <img src={dropdownIcon} />
            </p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Pages</p>
          </div>
        </div>

        <div className="actions">
          <div className="text-buttons">
            <img src={userIcon} />
            Login / Register
          </div>
          <div className="buttons">
            <div className="action-button">
              <img src={searchIcon} />
            </div>
            <div className="action-button">
              <img src={cardIcon} />1
            </div>
            <div className="action-button">
              <img src={favoriteIcon} />1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
