import React, { Component } from 'react';
import './Header.css';
import Menu from './Menu';

class Header extends Component{
	render(){
		return(
			<div className='header'>
                <Menu/>
				<h1 className='header-title'>部落格</h1>
			</div>
		)
	}
}

export default Header;