import React from 'react';
import './Home.css';
import picture from '/src/components/backgroundImg.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img src={ picture } className='home-img'></img>
      <p className='home-text'>不用為了天亮去跑<br/>跑下去<br/>天自己會亮</p>
      <Link to="/profile" className='home-profile-link'>profile</Link>
    </div>
  );
}

export default Home;