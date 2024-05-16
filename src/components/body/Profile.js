import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import picture from './/image/dailyfile.jpg';
import backgroundPicture from '/src/components/backgroundImg.jpg';

function Profile() {
  return (
    <div className='profile-container'>
      <img src={ backgroundPicture } className='background-img'></img>
      <div className='profile-content'>
            <div className='profile-picture'>
                <img src={ picture } alt="picture" width={'200px'}></img>
            </div>
            <div className='profile-details'>
                <div>
                    <h2>黃品甄</h2>
                    <p>Pin-Chen, Huang</p>
                    <div className='profile-text'>
                      <p>台北市立大學 資訊科學系 一年級</p>
                    </div>
                </div>
                <Link to="/" className='profile-home-link'>Home</Link>
            </div>
      </div>
    </div>
  );
}

export default Profile;