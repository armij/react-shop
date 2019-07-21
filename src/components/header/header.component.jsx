import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import ShopPage from '../../pages/shop/shop.component';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
    </div>
  </div>
)

export default Header;