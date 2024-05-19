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