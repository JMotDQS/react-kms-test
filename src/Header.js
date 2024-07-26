import React from 'react';
//import {ReactComponent as Logo} from './images/DQS_logo.svg';
//import {ReactSVG} from 'react-svg';
//import logo from './images/DQS_logo.svg';
import Logo from './Logo.js';
import './css/header.css';

const Header = () => {
	return (
		<header>
			{/*<img src={logo} className="nav-logo" alt="logo" />*/}
			<Logo />
			{/*<ReactSVG src='./images/DQS_logo.svg'
				beforeInjection={(svg) => {
					svg.classList.add('nav-logo')
					svg.setAttribute('style', 'fill: var(--color-kms-shadow)')
				  }}
			/>*/}
			<p className='header-title'>Key Master Application&trade;</p>
		</header>
	)
}

export default Header