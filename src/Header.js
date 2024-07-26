import React from 'react';
import Logo from './Logo.js';
import './css/header.css';

const Header = () => {
	return (
		<header>
			<Logo />

			<div>
				<select name="lots" id="lots" defaultValue="0">
					<option value="0" disabled>Choose a Lot</option>
					<option value="1">Parts Galore</option>
					<option value="2">Huber</option>
					<option value="3">Map AD</option>
					<option value="4">Borman</option>
				</select>
			</div>

			<div>
				<p className='header-title'>Key Master Application&trade; Dashboard</p>
			</div>
		</header>
	)
}

export default Header