import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';
import {
  ARTIST,
  DESIGNER,
  DEVELOPER,
  DILETTANTE,
} from 'src/shared/constants/role';
import Butterfly from 'src/components/Butterfly';
import Cube from 'src/components/Cube';
import Menu from 'src/components/Menu';
import { keyChange } from 'src/shared/functions/keyChange';
import { roleClass } from 'src/shared/functions/roleClass';
// import Link from 'next/link';

const roles = [DEVELOPER, DESIGNER, ARTIST, DILETTANTE];

import {
  hero,
  heroTitle,
  heroTagline,
  heroTrigger,
  heroNavlist,
  heroNav,
  heroOption,
  heroMenu,
  heroTabs,
  heroPanel,
  heroPlatform,
  selected,
  roleDevelop,
  roleDesign,
  roleArt,
  roleDabble,
  card,
  // cta,
  // featuredImage,
} from './style.module.css';

// const LEFT = 37;
// const RIGHT = 39;

// const changeTab = (event) => {
//   const isDirectionPressed = (event.keyCode === LEFT || event.keyCode === RIGHT);
//   if (!isDirectionPressed) {
//     return;
//   }
//   if (event.keyCode === LEFT) {
//     event.target.previousElementSibling?.focus();
//   }
//   if (event.keyCode === RIGHT) {
//     event.target.nextElementSibling?.focus();
//   }
//   event.preventDefault();
// };

const Hero = ({setRole, works}) => {
  // const [currentItem, setCurrentItem] = useState(1);
  const [currentRole, setCurrentRole] = useState('');
  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', currentRole) || DEVELOPER)
    setRole(currentRole);
  }, [setRole, currentRole, setCurrentRole]);

  const handleRole = (event) => {
    setCurrentRole(event.target.value);
    localStorage.setItem('role', event.target.value);
    setRole(currentRole);
  }

  const isRole = (role, value) => role === value;

  const tabs = roles.map((role) => {
    return <li className={heroNav} key={keyChange(`tab_${role}`)} role="option"><button
    aria-controls={keyChange(`panel_${role}`)}
    aria-selected={currentRole === role}
    tabIndex={currentRole === role ? -1 : 0}
    id={keyChange(`tab_${role}`)}
    type="button"
    className={heroOption}
    onClick={(event) => handleRole(event)}
    // onKeyDown={changeTab}
    role="tab"
    disabled={isRole(currentRole, role)}
    value={role}>{role}</button></li>
  });

  const panels = roles.map((role) => (
    <article className={`${heroPanel} ${currentRole === role ? selected : ''}`} tabIndex="0" role="tabpanel" id={keyChange(`panel_${role}`)} key={keyChange(`panel_${role}`)} aria-labelledby={keyChange(`tab_${role}`)}>
    {role === DEVELOPER && (<Cube />)}
    {/* {role === DESIGNER && (<Menu works={works} />)} */}
    </article>
  ));


  return (
    <header className={`${hero} ${roleClass(currentRole,
      roleDevelop,
      roleDesign,
      roleArt,
      roleDabble)}`}>
      <article>
        <section className={heroTabs}>
          <nav>
            <h1 className={heroTitle}>N.E.Lilly: The Good Parts <Butterfly /></h1>
            <div className={heroTagline}>My name is Nathan and I’m <span className={heroMenu}>
            <button className={heroTrigger} aria-haspopup="listbox">{currentRole}</button>
            <ul className={heroNavlist}>
              {tabs}
            </ul>
            </span>.</div>
          </nav>
        </section>
        {/* <section className={heroPlatform}>
          {panels}
        </section> */}
      </article>
    </header>
  );
};

export default Hero;

Hero.propTypes = {
  role: PropTypes.string.isRequired,
  setRole: PropTypes.func.isRequired,
  works: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
};
