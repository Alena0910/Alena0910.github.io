import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Profile from '/src/components/body/Profile.js';
import Home from '/src/components/body/Home.js';
import './App.css';
import IssueList from './body/issueList';


class App extends Component{
	render(){
		return(
			<div className="app-body">
				<Header/>
				<div className="routes-container">
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/profile" element={<Profile/>} />
						<Route path="/issue-list" element={<IssueList/>} >
							<Route path=":id" element={<IssueList/>} />
						</Route>
					</Routes>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;