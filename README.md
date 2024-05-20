# 簡介
## 主題
以 React + typescript 建立個人部落格
##  功能
### 主頁
![image](https://github.com/Alena0910/Alena0910.github.io/assets/116648694/c139c164-4fa8-464b-838e-c1e2412d8e67)
#### 主頁側欄
![image](https://github.com/Alena0910/Alena0910.github.io/assets/116648694/dcc6300e-53f5-44a6-978e-768381146011)
### 個人自我介紹 ( About )
![image](https://github.com/Alena0910/Alena0910.github.io/assets/116648694/31eb8c71-0e72-4259-9294-46b83aa52b20)
### 文章列表 ( Issue List )
#### 列表
![image](https://github.com/Alena0910/Alena0910.github.io/assets/116648694/015e1b7b-acd8-4d0a-8a6c-59ee0e801025)
#### 文章
![image](https://github.com/Alena0910/Alena0910.github.io/assets/116648694/dcfeea5b-2023-45bb-8d1b-419c962b7216)
## 說明文件
> [!NOTE]  
> CSS 設定僅以百分比控制，未使用 RWD

### index.tsx
建立 React root 節點及創建 root 節點 render component。
```
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/components/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
        <React.StrictMode>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
```
### App.tsx
以 React router 宣告每個路徑要渲染的 component。
```
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import About from './body/About';
import Home from './body/Home';
import IssueList from './body/IssueList';
import Cards from './body/Cards';
import './App.css';


class App extends Component{
	render(){
		return(
			<div className="app-body">
				<Header/>
				<div className="routes-container">
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/about" element={<About/>} />
						<Route path="/issue-list" element={<IssueList/>} />
						<Route path="/issue-list/:CardsId" element={<Cards/>} />
					</Routes>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
```
### Header.tsx
```
import React, { Component } from 'react';
import './Header.css';
import Sidebar from './Sidebar';


class Header extends Component{
	render(){
		return(
			<div className='header'>
                <Sidebar/>
				<h1 className='header-title'>部落格</h1>
			</div>
		)
	}
}

export default Header;
```
### Footer.tsx
```
import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <p>© 2024</p>
        <p>Bakground image by <a href="https://reurl.cc/oRRALv">Pheladi Shai</a> from <a href="https://reurl.cc/bVVA5y">Pixabay</a></p>
      </footer>
    );
  }
}

export default Footer;
```
### SidebarData.tsx
紀錄側欄會顯示的項目以及先定義型別。
```
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

interface SidebarData {
    title: string,
    path: string,
    icon: JSX.Element,
    cName: string
}[]

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Issue List',
        path: '/issue-list',
        icon: <FaIcons.FaListUl />,
        cName: 'nav-text'
    }
];
```
### Sidebar.tsx
側欄。
先定義引入資料型別，以 useState<boolean> 紀錄 Sidebar 狀態(true 開啟或 false 關閉) ，以 arrow function toggleMenu 控制 Sidebar 的狀態，以 Sidebar 的狀態控制不同項目的顯示以及不同css的class。
當 Sidebar 開啟時，以 SidebarData.tsx 檔案中先定義好的資料顯示項目。
```
import React, { useState } from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';


interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Sidebar 的狀態

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="sidebar">
        { 
          !isOpen && <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={toggleMenu} />
          </Link>
        }
      </div>
      { 
        isOpen && <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={toggleMenu} />
              </Link>
            </li>
            {
              SidebarData.map((item: SidebarItem, index : number) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      &ensp; {item.icon} &ensp;
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      }
    </div>
  );
};

export default Sidebar;

```
### Home.tsx
主頁內容。
```
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const backgroundImg = require('./backgroundImg.jpg').default;

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
```
### About.tsx
個人自我介紹內容。
```
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
                      <p>生於2003年9月10日，20歲。興趣為熬夜、長時間補眠、練吉他(初學)、打撞球，星座為處女座，完美主義會不定期發作。</p>
                      <p>空閒時間會利用 Zerojudge 、 Codeforces 及 LeetCode 練習程式，CPE 最高題數為3題。</p>
                      <p>2022年畢業於 台北市立中山女子高級中學，目前就讀 台北市立大學資訊科學系。</p>
                      <p>高一參加動漫社，學習Python，並加入衛生糾察隊。高二進入資訊班群，課程包含C++程式設計、演算法與人工智慧概論、網頁專題、Ardunio等開發板等，並加入資訊研究社，以及成為衛生糾察隊小隊長。高三曾組隊參加2022資安女婕思初賽。在資訊班群裡，我認識了一群志同道合的好朋友，並且學會了重要的三件事：合作交流、自學程式、解決問題的能力。</p>
                      <p>高三網頁專題製作衛生糾察隊專屬網站，想法源自於我與夥伴分別是衛生糾察隊的小隊長以及大隊長，希望能改善現有制度的缺點，並節省紙本評分造成的浪費。<a href='https://youtu.be/ohU1rAz6c5M' className='demo'>Demo影片</a></p>
                      <p>曾於2022年9月就讀逢甲資訊科學系，期間參加逢甲黑客社，學習基礎程式以及資安基礎知識，並於程式設計課程中學習C語言，於該年11月底返回台北休學重考。</p>
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
```
### IssueList.tsx
Github REST API 取得 issue 資料的列表總攬。
先定義取得資料型別，以 useEffect 監聽資料取得，以 useState 紀錄取得的資料。
```
import React, { useState, useEffect } from "react";
import './IssueList.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const backgroundImg = require('./backgroundImg.jpg').default;

interface Issue {
    id: number;
    title: string;
    user: {
        login: string;
    };
    created_at: string;
}


function IssueList(){

    const [dataFromApi, setDataFromApi] = useState<Issue[]>([]);


    useEffect(() => {
        getPrivateRepositories();
    }, []);

    async function getPrivateRepositories() {
        try{
            const res = axios.get<Issue[]>('https://api.github.com/repos/Alena0910/Alena0910.github.io/issues', {
                headers: {
                    'Authorization': `token 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`,
                }
            })
            setDataFromApi((await res).data);
        }
        catch(error){
            alert('Error: ' + error);
            console.error('Error:', error);
        }
    }

    return(
        <div className="article-container">
            <img src={ backgroundImg } className='issue-background-img'></img>
            <div className="list-container">
                <Link to="/" className="issueList-home-link">Home</Link>
                <div>
                    {dataFromApi.map(d=>(
                        <Link 
                            key={d.id} 
                            className="articles" 
                            to={`/issue-list/${d.id}`} 
                            state={{ article: d }}
                        >
                            <h3>{d.title}</h3>
                            <p>作者: {d.user.login}</p>
                            <p>創建時間: {d.created_at}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IssueList;
```
### Cards.tsx
文章內容總攬。
由文章列表跳轉置 useParams 設定的分頁，顯示該文章內容。
```
import { Link, useLocation, useParams } from "react-router-dom";
import './Cards.css';

const Cards = () => {
    const { CardsId } = useParams();
    const { state } = useLocation();
    const data = state?.article || {};

    return (
        <div className="cards">
            <img src="https://alena0910.github.io/images/backgroundImg.jpg" className='cards-background-img'></img>
            <div className="cards-articles">
                <h3>{data.title}</h3>
                <p>作者: {data.user.login}</p>
                <p>創建時間: {data.created_at}</p>
                <p>文章ID: { CardsId }</p>
                <p>{data.body}</p>
            </div>
            <div className="links-container">
                <Link to="/" className="cards-link">Home</Link>
                <Link to="/issue-list" className="cards-link">Back to Issue List</Link>
            </div>
        </div>
    )
}

export default Cards;

```
