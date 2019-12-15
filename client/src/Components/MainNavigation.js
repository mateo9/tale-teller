import React from 'react';
import { NavLink } from 'react-router-dom'

import './MainNavigation.css'

const mainNavigation = props => (
  <header className='main_navigation'>
    <div className='main_navigation__logo'>
      <h1>Tale Teller</h1>
    </div>
    <nav className='main_navigation__items'>
      <ul>
        <li>
          <NavLink to=''>Register</NavLink>
        </li>
        <li>
          <NavLink to=''>Login</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default mainNavigation;