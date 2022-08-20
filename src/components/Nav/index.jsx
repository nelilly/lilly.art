import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Toggle from 'src/components/Toggle';
import useLocalStorage from 'src/shared/hooks/useLocalStorage';
import { 
  nav,
  navPanel,
  helmItem,
  navigationClose,
  open as openStyle,
  primaryPanel,
  secondaryPanel,
  span,
  visible,
  navItem,
  navLink,
} from './style.module.css';
import { DEVELOPER } from 'src/shared/constants/role';
const KEYCODE_TAB = 9;
const ESC = 27;

const Nav = ({role, setRole}) => {
  const navOpenRef = useRef(null);
  const navCloseRef = useRef(null);
  const navPanelRef = useRef(null);
  const [open, setOpen] = useState(null);
  const [currentRole, setCurrentRole] = useState('');
  // const [motionPref, setMotionPref] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', '');

  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', role) || DEVELOPER);
    setRole(currentRole);
  }, [role, setRole, currentRole, setCurrentRole]);

  const handleThemeToggle = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  
  const ToggleTheme = ({id, label}) => {
    useEffect(() => {
      if (theme === '' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.querySelector('html').classList.add("dark-theme");
      }
      theme === 'dark' && document.querySelector('html').classList.add("dark-theme");
      theme === 'light' && document.querySelector('html').classList.remove("dark-theme");
    });

    return <Toggle id={id} label={label} toggleValue={theme === 'dark'} toggleFunction={handleThemeToggle} />;
  }

  ToggleTheme.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  useEffect(() => {
    if (open === null) { return; }
    if (open) {
      navPanelRef.current.classList.add(visible);
      setTimeout(() => navCloseRef.current.focus(), 500);
    } else {
      setTimeout(() => navOpenRef.current.focus(), 500);
      setTimeout(() => navPanelRef.current.classList.remove(visible), 500);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const focusableEls = navPanelRef.current.querySelectorAll('a[href], button, input'); // navigationClose
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const listener = (event) => {
        if (event.keyCode === ESC) {
          setOpen(false);
        }
        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
              lastFocusableEl.focus();
              event.preventDefault();
            }
          } else if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            event.preventDefault();
          }
        }
      };
      document.addEventListener('keydown', listener);

      return () => {
        document.removeEventListener('keydown', listener);
      };
    }
    return '';
  });

  return (
    <nav className={`${nav} ${open ? openStyle : ''}`}>
      <button id="main_nav" className={helmItem} type="button" aria-expanded={!!open} aria-label="Expand navigation menu" onClick={() => setOpen(!open)} ref={navOpenRef} title="main navigation"><svg xmlns="http://www.w3.org/2000/svg" id="helm" height="40" width="40" viewBox="0 0 100 100" fill="currentColor" stroke="currentColor"><path d="M95.065 49.609a2.07 2.07 0 0 0-.414-1.094c-.382-.504-.997-.839-1.667-.99-1.571-.354-3.257.488-4.786.588-1.096.072-2.173.157-3.267.086-.116-.516-.619-.913-1.253-.913h-1.645a31.946 31.946 0 0 0-7.385-17.833l1.162-1.162c.448-.448.523-1.085.24-1.532.724-.824 1.545-1.525 2.371-2.249 1.152-1.01 2.939-1.607 3.8-2.968.497-.786.657-1.719.303-2.474-.212-.452-.604-.823-.975-1.141a2.07 2.07 0 0 0-1.067-.481c-.627-.086-1.298.111-1.879.478-1.361.861-1.958 2.648-2.968 3.8-.724.826-1.425 1.647-2.249 2.371-.447-.283-1.084-.208-1.532.24l-1.162 1.162a31.949 31.949 0 0 0-17.833-7.385v-1.645c0-.634-.397-1.137-.913-1.253-.071-1.094.014-2.171.086-3.267.1-1.529.942-3.214.588-4.786-.204-.907-.751-1.68-1.535-1.964-.47-.17-1.01-.155-1.496-.117a2.07 2.07 0 0 0-1.094.414c-.504.382-.839.997-.99 1.667-.354 1.571.488 3.257.588 4.786.072 1.096.157 2.173.086 3.267-.516.116-.913.619-.913 1.253v1.645a31.946 31.946 0 0 0-17.833 7.385l-1.162-1.162c-.448-.448-1.085-.523-1.532-.24-.824-.724-1.525-1.545-2.249-2.371-1.01-1.152-1.607-2.939-2.968-3.8-.786-.497-1.719-.657-2.474-.303-.452.212-.823.604-1.141.975a2.07 2.07 0 0 0-.481 1.067c-.086.627.111 1.298.478 1.879.861 1.361 2.648 1.958 3.8 2.968.826.724 1.647 1.425 2.371 2.249-.283.447-.208 1.084.24 1.532l1.162 1.162a31.949 31.949 0 0 0-7.385 17.833H16.45c-.634 0-1.137.397-1.253.913-1.094.071-2.171-.014-3.267-.086-1.529-.1-3.214-.942-4.786-.588-.907.204-1.68.751-1.964 1.535-.17.47-.155 1.01-.117 1.496.03.388.167.768.414 1.094.382.504.997.839 1.667.99 1.571.354 3.257-.488 4.786-.588 1.096-.072 2.173-.157 3.267-.086.116.516.619.913 1.253.913h1.645a31.946 31.946 0 0 0 7.385 17.833l-1.162 1.162c-.448.448-.523 1.085-.24 1.532-.724.824-1.545 1.525-2.371 2.249-1.152 1.01-2.939 1.607-3.8 2.968-.497.786-.657 1.719-.303 2.474.212.452.604.823.975 1.141a2.07 2.07 0 0 0 1.067.481c.627.086 1.298-.111 1.879-.478 1.361-.861 1.958-2.648 2.968-3.8.724-.826 1.425-1.647 2.249-2.371.447.283 1.084.208 1.532-.24l1.162-1.162a31.949 31.949 0 0 0 17.833 7.385v1.645c0 .634.397 1.137.913 1.253.071 1.094-.014 2.171-.086 3.267-.1 1.529-.942 3.214-.588 4.786.204.907.751 1.68 1.535 1.964.47.17 1.01.155 1.496.117a2.07 2.07 0 0 0 1.094-.414c.504-.382.839-.997.99-1.667.354-1.571-.488-3.257-.588-4.786-.072-1.096-.157-2.173-.086-3.267.516-.116.913-.619.913-1.253v-1.645a31.946 31.946 0 0 0 17.833-7.385l1.162 1.162c.448.448 1.085.523 1.532.24.824.724 1.525 1.545 2.249 2.371 1.01 1.152 1.607 2.939 2.968 3.8.786.497 1.719.657 2.474.303.452-.212.823-.604 1.141-.975a2.07 2.07 0 0 0 .481-1.067c.086-.627-.111-1.298-.478-1.879-.861-1.361-2.648-1.958-3.8-2.968-.826-.724-1.647-1.425-2.371-2.249.283-.447.208-1.084-.24-1.532l-1.162-1.162a31.949 31.949 0 0 0 7.385-17.833h1.645c.634 0 1.137-.397 1.253-.913 1.094-.071 2.171.014 3.267.086 1.529.1 3.214.942 4.786.588.907-.204 1.68-.751 1.964-1.535.167-.47.152-1.01.114-1.496zm-71.626 1.348a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zm44.833-20.32a.874.874 0 1 1 1.237 1.235.874.874 0 0 1-1.237-1.235zm-16.383 1.355c.545-.088.971-.609.971-1.267v-1.54a20.973 20.973 0 0 1 10.001 4.144l-1.088 1.088c-.434.434-.517 1.045-.266 1.49l-5.367 5.367c-.445-.251-1.056-.168-1.49.266l-.483.483a8.94 8.94 0 0 0-1.307-.546v-.678c0-.658-.426-1.179-.971-1.267v-7.54zm-1.825-9.41a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75zm-2.796 6.603v1.54c0 .614.373 1.105.865 1.242v7.59c-.492.137-.865.628-.865 1.242v.678a8.894 8.894 0 0 0-1.307.546l-.483-.483c-.465-.465-1.135-.532-1.583-.209L38.563 36c.323-.448.256-1.118-.209-1.583l-1.088-1.088a20.982 20.982 0 0 1 10.002-4.144zm-16.649 1.452a.874.874 0 1 1 1.237 1.235.874.874 0 0 1-1.237-1.235zm2.693 6.647l1.088 1.088c.434.434 1.045.517 1.49.266l5.367 5.367c-.251.445-.168 1.056.266 1.49l.483.483a8.94 8.94 0 0 0-.546 1.307h-.678c-.658 0-1.179.426-1.267.971h-7.54c-.088-.545-.609-.971-1.267-.971h-1.54a20.963 20.963 0 0 1 4.144-10.001zm-1.456 32.243a.874.874 0 1 1-1.237-1.235.874.874 0 0 1 1.237 1.235zm2.543-7.735l-1.088 1.088a20.963 20.963 0 0 1-4.144-10.001h1.54c.614 0 1.105-.373 1.242-.865h7.59c.137.492.628.865 1.242.865h.678c.147.453.332.889.546 1.307l-.483.483c-.465.465-.532 1.135-.209 1.583l-5.332 5.332c-.447-.324-1.117-.257-1.582.208zm13.84 6.38c-.545.088-.971.609-.971 1.267v1.54a20.973 20.973 0 0 1-10.001-4.144l1.088-1.088c.434-.434.517-1.045.266-1.49l5.367-5.367c.445.251 1.056.168 1.49-.266l.483-.483a8.94 8.94 0 0 0 1.307.546v.678c0 .658.426 1.179.971 1.267v7.54zm1.825 9.41a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zm0-24.773a2.727 2.727 0 1 1 0-5.454 2.727 2.727 0 0 1 0 5.454zm2.797 18.17v-1.54c0-.614-.373-1.104-.865-1.242v-7.59c.492-.137.865-.628.865-1.242v-.678a8.894 8.894 0 0 0 1.307-.546l.483.483c.465.465 1.135.532 1.583.209l5.332 5.332c-.323.448-.256 1.118.209 1.583l1.088 1.088a21 21 0 0 1-10.002 4.143zm16.649-1.452a.874.874 0 1 1-1.237-1.235.874.874 0 0 1 1.237 1.235zm-2.693-6.648l-1.088-1.088c-.434-.434-1.045-.517-1.49-.266l-5.367-5.367c.251-.445.168-1.056-.266-1.49l-.483-.483a8.94 8.94 0 0 0 .546-1.307h.678c.658 0 1.179-.426 1.267-.971h7.54c.088.545.609.971 1.267.971h1.54a20.975 20.975 0 0 1-4.144 10.001zm2.604-15.594c-.614 0-1.104.373-1.242.865h-7.59c-.137-.492-.628-.865-1.242-.865h-.678a8.894 8.894 0 0 0-.546-1.307l.483-.483c.465-.465.532-1.135.209-1.583l5.332-5.332c.448.323 1.118.256 1.583-.209l1.088-1.088a20.959 20.959 0 0 1 4.144 10.001h-1.541zm7.268 3.672a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z"></path></svg></button>
      <section className={navPanel} ref={navPanelRef}>
        <button className={navigationClose} type="button" aria-expanded={!!open} aria-label="Close navigation menu" onClick={() => setOpen(!open)} ref={navCloseRef}><svg viewBox="0,0 100,100" height="40" width="40" stroke="currentColor" strokeWidth="10" strokeLinecap="round"><path d="M25,25 75,75 M25,75 75,25" fill="none" /></svg></button>
        <section className={primaryPanel}>
          <ul>
            <li className={navItem}><Link href={'/'}><a className={navLink}>Home</a></Link></li>
            <li className={navItem}><Link href={`/resume`}><a className={navLink}>Résumé</a></Link></li>
            <li className={navItem}>
              <Link href={`/gallery`}><a className={navLink}>Gallery</a></Link>
              {/*
              <ul>
                <li><Link href="/development">Development</Link></li>
                <li><Link href="/ux">User Experience</Link></li>
                <li><Link href="/ui">User Interface</Link></li>
                <li><Link href="/design">Graphic Design</Link></li>
                <li><Link href="/motion">Animation/Motion Graphics</Link></li>
                <li><Link href="/illustration">Illustration</Link></li>
                <li><Link href="/print">Print</Link></li>
              </ul>
              */}
            </li>
            <li className={navItem}>
              <Link href={`/biography`}><a className={navLink}>Biography</a></Link>
                {/*
                <ul>
                  <li><Link href="/biography/timeline">Timeline</Link></li>
                  <li><Link href="/biography/faqs">FAQs</Link></li>
                  <li><Link href="/biography/mentors">Mentors</Link></li>
                </ul>
                */}
            </li>
          </ul>
        </section>
        <section></section>
        <section className={secondaryPanel}>
          {/* <section style={{padding: '0 0 3rem'}}>
            <h2>Notifications</h2>
            <table style={{width: '100%', textTransform: 'uppercase', fontSize: '1rem'}}>
              <tbody>
                <tr>
                  <td></td><td>Resume Updated</td><td>May 13, 2021</td>
                </tr>
                <tr>
                  <td></td><td>Gallery Updated</td><td>Apr 13, 2021</td>
                </tr>
                <tr>
                  <td></td><td>Component Added</td><td>Jan 13, 2021</td>
                </tr>
              </tbody>
            </table>
          </section> */}
          <section>
            <h2>Settings</h2>
            <p>Role: <span className={span}>{currentRole}</span></p>
            <ToggleTheme id="navToggleDarkMode" label="Dark mode" />
            {/* <Toggle id="navToggleMotion" label="No/Unnecessary Motion" toggleValue={motionPref} toggleFunction={setMotionPref} /> */}
          </section>
          <ul>
            <li className={navItem}>
              <Link href="https://journal.lilly.art/"><a className={navLink}>Journal <span aria-hidden="true">&#x27B6;</span></a></Link>
            </li>
            <li className={navItem}>
              <Link href={`/colophon`}><a className={navLink}>Colophon</a></Link>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  role: PropTypes.string.isRequired,
  setRole: PropTypes.func.isRequired,
};
