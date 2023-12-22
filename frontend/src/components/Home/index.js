import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';
import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  const { mode } = useContext(ModeContext)

  return (
    <div className='whole-home-page-container'>
      <Header />
      <div className='warning'>
        {
          mode === 'offline' ?
          <Alert key={'danger'} variant={'danger'}>
          You are offline Check your internet connection!
        </Alert>:
        null
        }
        </div>
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
      
    </div>
  );
};

export default Home;
