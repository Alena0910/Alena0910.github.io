import React from 'react';
import './Home.css';
import backgroundImg from '/src/components/body/backgroundImg.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-main'>
      <img src={ backgroundImg } className='home-img'></img>
      <div className='home-content'>
        <div className='home-text'>不用為了天亮去跑<br/>跑下去<br/>天自己會亮<p className='quotation'>-- NewBalance × Papi酱</p></div>
        <div className='home-links-container'>
            <Link to="/about" className='home-link'>About</Link>
            <Link to="/issue-list" className='home-link'>Issue list</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;