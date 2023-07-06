import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';

const Home = () => {

  return (
    <>
    
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Fashion is the armour to survive the reality of everyday life</h1>
          <img
            src="shop.gif"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
          A product can be copied by a competitor; a brand is unique,Buy what you don’t have yet, or what you really want, which can be mixed with what you already own. Buy only because something excites you, not just for the simple act of shopping.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="shop.gif"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
      
    </>
  );
};

export default Home;
