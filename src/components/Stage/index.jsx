import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { useD3 } from '../../shared/hooks/useD3';
import {
  ARTIST,
  DESIGNER,
  DEVELOPER,
  DILETTANTE,
} from 'src/shared/constants/role';
import { keyChange } from 'src/shared/functions/keyChange';
import { roleClass } from 'src/shared/functions/roleClass';

const roles = [DEVELOPER, DESIGNER, ARTIST, DILETTANTE];

import {
  stage,
  stageHeader,
  stageTitleImage,
  stageTitle,
  stageTag,
  stageTagline,
  stageTrigger,
  stageNavlist,
  stageNav,
  stageOption,
  stageMenu,
  stageTabs,
  stageGlobe,
  stageGreeting,
  stageHello,
  stageQuote,
  roleDevelop,
  roleDesign,
  roleArt,
  roleDabble,
} from './style.module.css';

const Stage = ({setRole, works}) => {
  // const [currentItem, setCurrentItem] = useState(1);
  const [currentRole, setCurrentRole] = useState('');
  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', currentRole) || DEVELOPER)
    setRole(currentRole);
  }, [setRole, currentRole, setCurrentRole]);

  const globeRef = useD3(
    (canvas) => {
      let geojson = {};
      let yaw = 100;
      const context = canvas.node().getContext('2d');
      const projection = d3.geoOrthographic().scale(900);
      const geoGenerator = d3.geoPath().projection(projection).pointRadius(4).context(context);

      const draw = () => {
        projection.rotate([yaw, -55]);
        context.clearRect(0, 0, 1920, 1080);
        context.lineWidth = 1;
        context.strokeStyle = '#666c';
        context.beginPath();
        geoGenerator({type: 'FeatureCollection', features: geojson.features})
        context.stroke();
        const graticule = d3.geoGraticule();
        context.beginPath();
        context.lineWidth = .5;
        context.strokeStyle = '#6667';
        geoGenerator(graticule());
        context.stroke();

        yaw -= 0.025;
        window.requestAnimationFrame(draw);
      }

      d3.json('/data/ne_110m_land.json')
        .then(function(json) {
        geojson = json;
        window.requestAnimationFrame(draw);
      });
    },
    []
  );

  const handleRole = (event) => {
    setCurrentRole(event.target.value);
    localStorage.setItem('role', event.target.value);
    setRole(currentRole);
  }

  const isRole = (role, value) => role === value;

  const tabs = roles.map((role) => {
    return <li className={stageNav} key={keyChange(`tab_${role}`)} role="option"><button
    aria-controls={keyChange(`panel_${role}`)}
    aria-selected={currentRole === role}
    tabIndex={currentRole === role ? -1 : 0}
    id={keyChange(`tab_${role}`)}
    type="button"
    className={stageOption}
    onClick={(event) => handleRole(event)}
    role="tab"
    disabled={isRole(currentRole, role)}
    value={role}>{role}</button></li>
  });

  return (
    <header className={`${stage} ${roleClass(currentRole,
      roleDevelop,
      roleDesign,
      roleArt,
      roleDabble)}`}>
      <div  className={stageHeader}>
        <img src="/lilly3_swan.svg" className={stageTitleImage} height="160" width="160" />
        <h1 className={stageTitle}> N.E.Lilly</h1>
        <p className={stageTag}>Amateur Dilettante. Professional UI.</p>
      </div>

      <canvas className={stageGlobe} width="1920" height="1080" ref={globeRef} />

      <nav className={stageTabs}>
        <div className={stageTagline}>
          <span className={stageMenu}>
          <button className={stageTrigger} aria-haspopup="listbox">{currentRole}</button>
          <ul className={stageNavlist}>
            {tabs}
          </ul>
          </span>
        </div>
      </nav>

      {currentRole === 'a Developer' && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p style={{margin: '0 .4rem .6rem 0'}}>“Do a spinning globe. A spinning globe sells it every time.”</p>
          <cite style={{margin: '0 .8rem 0 0'}}>– The World Wide Web, 1996</cite>
        </blockquote>
      </div>}

      {currentRole === 'a Designer' && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p style={{margin: '0 .4rem .6rem 0'}}>“It’s not just what it looks like and feels like. Design is how it works.”</p>
          <cite style={{margin: '0 .8rem 0 0'}}>– An apple salesman, 2003</cite>
        </blockquote>
      </div>}

      {currentRole === 'an Artist' && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p style={{margin: '0 .4rem .6rem 0'}}>“All works of Art are self-portraits.”</p>
          <cite style={{margin: '0 .8rem 0 0'}}>– Joseph Ducreux (probably), 1793</cite>
        </blockquote>
      </div>}

      {currentRole === 'a Dilettante' && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p style={{margin: '0 .4rem .6rem 0'}}>“I wanted to be a professional dabbler but I just never could stick with it.”</p>
          <cite style={{margin: '0 .8rem 0 0'}}>– I’m in this photo and I don’t like it, 2017</cite>
        </blockquote>
      </div>}
    </header>
  );
};

export default Stage;

Stage.propTypes = {
  role: PropTypes.string.isRequired,
  setRole: PropTypes.func.isRequired,
  works: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
};
