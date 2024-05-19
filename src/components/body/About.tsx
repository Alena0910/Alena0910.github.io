import './About.css';
import { Link } from 'react-router-dom';

const picture = require('./image/dailylife.jpg').default;
const backgroundImg = require('./backgroundImg.jpg').default;

export default function About(){
  return (
    <div className='about-container'>
      <img src={ backgroundImg } className='about-background-img'></img>
      <div className='about-content'>
            <div className='about-picture'>
                <img src={ picture } alt="picture" width={'200px'}></img>
            </div>
            <div className='about-details'>
                <div>
                    <h2>黃品甄</h2>
                    <p>Pin-Chen, Huang</p>
                    <div className='about-text'>
                      <p>2022年畢業於 台北市立中山女子高級中學，目前就讀台北市立大學資訊科學系。</p>
                      <p>高一參加動漫社，學習Python，並加入衛生糾察隊。高二進入資訊班群，課程包含C++程式設計、演算法與人工智慧概論、網頁專題、Ardunio等開發板等，並加入資訊研究社，以及成為衛生糾察隊小隊長。高三曾參加2022資安女婕思初賽。在資訊班群裡，我認識了一群志同道合的好夥伴，並且學會了重要的三件事：合作交流、自學程式、解決問題的能力。</p>
                      <p>高三網頁專題主題是製作衛生糾察隊專屬網站，想法源自於我與夥伴分別是衛生糾察隊的小隊長以及大隊長，希望能改善現有制度的缺點，並節省紙本評分造成的浪費。<a href='https://youtu.be/ohU1rAz6c5M' className='demo'>Demo影片</a></p>
                      <p>曾於2022年9月就讀逢甲資訊科學系，期間參加逢甲黑客社，學習基礎程式以及資安基礎知識，並於程式設計課程中學習C語言。</p>
                      <p>就讀北市大期間，於2024年5月參加臺北程式設計節。</p>
                      <p>To be continue...</p>
                    </div>
                </div>
                <Link to="/" className='about-home-link'>Home</Link>
            </div>
      </div>
    </div>
  );
}