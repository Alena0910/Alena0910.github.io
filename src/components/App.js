import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import IssueList from '/src/components/body/IssueList.js';
import Profile from '/src/components/body/Profile.js';
import Home from '/src/components/Home.js';
import './App.css';


class App extends Component{
	render(){
		return(
			<div className="app-body">
				<Header/>
				<div className="routes-container">
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/issueList" element={<IssueList/>} />
						<Route path="/profile" element={<Profile/>} />
					</Routes>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;