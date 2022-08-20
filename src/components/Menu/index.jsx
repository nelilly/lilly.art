import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Toggle from 'src/components/Toggle';
import { 
  menu,
  menuPanel,
  menuItem,
  dark as darkStyle,
} from './style.module.css';
import { DEVELOPER } from 'src/shared/constants/role';
import { gallery, repositories, artistShelf, developerShelf } from 'src/data/gallery.json';
import useMousePosition from 'src/shared/hooks/useMousePosition';
const KEYCODE_TAB = 9;
const ESC = 27;

const Menu = ({works}) => {
  // const [currentRole, setCurrentRole] = useState('');
  // useEffect(() => {
  //   setCurrentRole(localStorage.getItem('role', role) || DEVELOPER)
  //   setRole(currentRole);
  // }, [role, setRole, currentRole, setCurrentRole]);
  const { x, y } = useMousePosition();

  const hasMovedCursor = typeof x === 'number' && typeof y === 'number';
  const translate = (x, y) => hasMovedCursor ? `translateX(calc(${-(x / 3)}px + 4rem)) translateY(calc(${-(y * 2)}px + 10rem))` : 'translateX(0) translateY(0)';

  return (
    <nav className={`${menu}`}>
      <section className={menuPanel} style={{position: 'absolute', top: '22rem', zIndex: 1, transform: translate(x, y)}}>
        {works.map(({image, title}) => <a href="#" key={title} className={menuItem}><img src={image} alt={title} /></a>)}
      </section>
      <section className={menuPanel} style={{position: 'absolute', top: '0rem', left: '-5rem', zIndex: 0, transform: `scale(.75) ${translate(x/2, y/2)}`}}>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg viewBox="0,0 100,100" stroke="#fff3" strokeWidth="10" fill="none">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </section>
    </nav>
  );
};

export default Menu;

Menu.propTypes = {
  works: PropTypes.array.isRequired,
};
