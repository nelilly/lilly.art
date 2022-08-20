import PropTypes from 'prop-types';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

import { 
  main,
  siteHeader,
  siteId,
  siteLogo,
  siteTitle,
  siteSubtitle,
  helm,
} from './style.module.css';

const Layout = ({ children, role, setRole  }) => {
  
  return (
  <>
    <header className={`${siteHeader}`}>
      <nav className={helm}>
        <a href="/" className={siteId}>
          <svg id="lilly-arms" className={siteLogo} viewBox="-25,-25 150,150" height="36" width="36">
            <defs>
              <linearGradient id="redGradient">
                <stop offset="0%" stopColor="#700"/>
                <stop offset="100%" stopColor="#a00"/>
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="72.5" fill="#900" stroke="#0002" strokeWidth="5" />
            <path d="M50 95c26 0 21-48 47-48 0-11-19-21-32-4 0-18-1-26-15-38-14 12-15 20-15 38-13-17-32-7-32 4 26 0 21 48 47 48z" fill="#fff" />
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
