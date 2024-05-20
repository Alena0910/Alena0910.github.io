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
                      <p>生於2003年9月10日，20歲。興趣是熬夜、長時間補眠、練吉他(初學)、打撞球。星座為處女座，完美主義會不定期發作。</p>
                      <p>空閒時間會利用 Zerojudge 、 Codeforces 及 LeetCode 練習程式，CPE 最高題數為3題。</p>
                      <p>2022年畢業於 台北市立中山女子高級中學，目前就讀 台北市立大學資訊科學系。</p>
                      <p>高一參加動漫社，學習Python，加入衛生糾察隊。高二進入資訊班群及資訊研究社，資訊班群課程包含C++程式設計、演算法與人工智慧導論、網頁專題、Ardunio等，並成為衛生糾察隊小隊長。高三曾組隊參加2022資安女婕思初賽。在資訊班群，我認識了一群志同道合的好朋友，並且學會了重要的三件事：合作交流、自學程式、解決問題的能力。</p>
                      <p>高三網頁專題製作衛生糾察隊專屬網站，想法源自於我與夥伴分別是衛生糾察隊的小隊長及大隊長，希望能改善現有制度的缺點，並節省紙本評分造成的浪費。<a href='https://youtu.be/ohU1rAz6c5M' className='demo'>Demo影片</a></p>
                      <p>曾於2022年9月就讀逢甲資訊工程學系，期間參加逢甲黑客社，學習基礎程式以及資安基礎知識，在系上程式設計課學習C語言，於該年11月底返回台北休學重考。</p>
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