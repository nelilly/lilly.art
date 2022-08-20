import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';
import {
  ARTIST,
  DESIGNER,
  DEVELOPER,
  DILETTANTE,
} from 'src/shared/constants/role';
import Carousel from 'src/components/Carousel';
import Butterfly from 'src/components/Butterfly';
import { keyChange } from 'src/shared/functions/keyChange';
import { roleClass } from 'src/shared/functions/roleClass';
// import Link from 'next/link';

const roles = [DEVELOPER, DESIGNER, ARTIST, DILETTANTE];

import {
  jumbotron,
  jumbotronTitle,
  jumbotronTagline,
  jumbotronTrigger,
  jumbotronNavlist,
  jumbotronNav,
  jumbotronOption,
  jumbotronMenu,
  jumbotronTabs,
  // jumbotronTab,
  jumbotronPanel,
  // jumbotronTabPanel,
  jumbotronPlatform,
  selected,
  // cardContainer,
  // card,
  // cardTitle,
  roleDevelop,
  roleDesign,
  roleArt,
  roleDabble,
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

const Jumbotron = ({setRole, works}) => {
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

  // const tabs = items.map((item) => (
  //   <button
  //     aria-controls={`panel${item.id}`}
  //     aria-selected={item.id === currentItem}
  //     className={`${jumbotronTab} ${item.id === currentItem ? selected : ''}`}
  //     id={`tab${item.id}`}
  //     key={`tab${item.id}`}
  //     onClick={() => setCurrentItem(item.id)}
  //     onKeyDown={changeTab}
  //     role="tab"
  //     tabIndex={item.id === currentItem ? 0 : -1}
  //     type="button"
  //   >
  //     {item.title}
  //   </button>
  // ));

  const tabs = roles.map((role) => {
    return <li className={jumbotronNav} key={keyChange(`tab_${role}`)} role="option"><button
    aria-controls={`panel_${role}`}
    aria-selected={currentRole === role}
    tabIndex={currentRole === role ? -1 : 0}
    id={`tab_${role}`}
    type="button"
    className={jumbotronOption}
    onClick={(event) => handleRole(event)}
    // onKeyDown={changeTab}
    role="tab"
    disabled={isRole(currentRole, role)}
    value={role}>{role}</button></li>
  });

  const panels = roles.map((role) => (
    <article className={`${jumbotronPanel} ${currentRole === role ? selected : ''}`} tabIndex="0" role="tabpanel" id={`panel_${role}`} key={`panel_${role}`} aria-labelledby={`tab_${role}`}>
      {role === DEVELOPER && <Carousel slides={works.slice(0,10)} />}
    </article>
  ));


  return (
    <header className={`${jumbotron} ${roleClass(currentRole,
      roleDevelop,
      roleDesign,
      roleArt,
      roleDabble)}`}>
      <article role="tablist" aria-label="Features">
        <section className={jumbotronTabs}>
          <nav>
            <h1 className={jumbotronTitle}>N.E.Lilly: The Good Parts <Butterfly /></h1>
            <div className={jumbotronTagline}>My name is Nathan and I’m <span className={jumbotronMenu}>
            <button className={jumbotronTrigger} aria-haspopup="listbox">{currentRole}</button>
            <ul className={jumbotronNavlist} role="listbox" tabIndex="-1">
              {tabs}
            </ul>
            </span>.</div>
          </nav>
        </section>
        <section className={jumbotronPlatform}>
          {panels}
        </section>
      </article>
    </header>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  role: PropTypes.string.isRequired,
  setRole: PropTypes.func.isRequired,
  works: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
};
