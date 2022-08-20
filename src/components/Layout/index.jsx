import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

import { 
  main,
  home,
  siteHeader,
  siteId,
  siteLogo,
  siteTitle,
  siteSubtitle,
  helm,
} from './style.module.css';

const Layout = ({ children, role, setRole  }) => {
  const router = useRouter();
  const routed = (path) => router.pathname === path ? 'page' : '';
  
  return (
  <>
    <header className={`${siteHeader} ${routed('/') ? home : ''}`}>
      <nav className={helm}>
        <a href="/" className={siteId}>
          <svg id="lilly-arms" className={siteLogo} viewBox="0,0 250,250" height="36" width="36">
          <linearGradient id="red" gradientUnits="userSpaceOnUse" x1="75" y1="0" x2="75" y2="250">
            <stop  offset="0" stopColor="#770000"/>
            <stop  offset="1" stopColor="#AA0000"/>
          </linearGradient>
          <circle cx="125" cy="125" r="120.8" fill="url(#red)" stroke="#0002" strokeWidth="8" /><path fill="#fff" d="M73.5,156.8c20.1,0,16.2-37.1,36.3-37.1c0-8.5-14.7-16.2-24.7-3.1c0-13.9-0.8-20.1-11.6-29.3c-10.8,9.3-11.6,15.4-11.6,29.3c-10.1-13.1-24.7-5.4-24.7,3.1C57.2,119.7,53.4,156.8,73.5,156.8zM176.5,156.8c20.1,0,16.2-37.1,36.3-37.1c0-8.5-14.7-16.2-24.7-3.1c0-13.9-0.8-20.1-11.6-29.3c-10.8,9.3-11.6,15.4-11.6,29.3c-10.1-13.1-24.7-5.4-24.7,3.1C160.3,119.7,156.4,156.8,176.5,156.8zM125,215.1c20.1,0,16.2-37.1,36.3-37.1c0-8.5-14.7-16.2-24.7-3.1c0-13.9-0.8-20.1-11.6-29.3c-10.8,9.3-11.6,15.4-11.6,29.3c-10.1-13.1-24.7-5.4-24.7,3.1C108.8,178.1,104.9,215.1,125,215.1zM104.1,32.8c-2.9,2.1-4.5,5.8-2.8,10.1c0.3,0.7-0.1,0.2-0.1,1.9c0,1.4,0.1,3.5,0.1,5c0,0.8-0.6,1.6-0.3,2.4c0.1,0.3,0.8,0.3,1.1,0.3c0.9-0.2,1.3-1.2,1.8-2c1.4-2.3,5.3-6.1,6.2-9c0.3-0.9,1.5-2.4,2.9-1.6c0.6,0.4,0.7,1,0.6,1.6c-0.3,1.1-0.7,2.1-1.2,3.2c0,0.1-0.1,0.2-0.1,0.3c-5,9.9-17.7,22.3-13.4,34.4c2,5.4,6.1,8.6,11.4,9.3c10.4,1.2,41.9,0,41.9,0c-0.7-4.8-4.1-9.7-11.5-12c13.1-4.7,18.5-7.6,23.6-20.9c-12.8,3.7-27.6-10.1-51.3,8.3c14.5-24.3,9.8-34-0.6-33.9C107.9,30.1,105.8,31.5,104.1,32.8z"/>
          </svg>
          <div className={siteTitle}>N.E.Lilly <p className={siteSubtitle}>{role}</p></div>
        </a>
        <Nav role={role} setRole={setRole} />
      </nav>
    </header>
    <main id="main" className={`${main}`}>{children}</main>
    <Footer role={role} setRole={setRole} />
  </>
);
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  role: PropTypes.string.isRequired,
  setRole: PropTypes.func.isRequired,
};
