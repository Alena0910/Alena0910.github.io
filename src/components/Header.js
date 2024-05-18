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