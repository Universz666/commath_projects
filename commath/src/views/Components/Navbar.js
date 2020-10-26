import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          COMMATH
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='../b2s' className='nav-links' onClick={closeMobileMenu}>
              Basic Computing
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='../elimination'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Linear Algebraic Equations
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='../interpolation'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Interpolation
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='../differentiation'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Differentiation
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='../integration'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Integration
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='../root-finding'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Root-finding
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;