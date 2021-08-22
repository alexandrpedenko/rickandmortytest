import React from 'react'
import { NavLink } from 'react-router-dom';
import './menu.sass'


const Menu = () => {
  const links = [
    { label: 'Characters', href: '/characters' },
    { label: 'Episodes', href: '/episodes' },
    { label: 'Locations', href: '/locations' },
    { label: 'My Watch List', href: '/mywatchlist' },
  ];

  return (  
    <nav className='menu'>
      {links && links.map(({label, href}) => (
        <NavLink to={href} key={label} className='menu__link'>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
