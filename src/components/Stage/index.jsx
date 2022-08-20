import * as d3 from 'd3';
import { useD3 } from '../../shared/hooks/useD3';
import { useSettingsContext } from 'src/shared/context/Settings';
import Select from 'src/components/Select';
import {
  ARTIST,
  DESIGNER,
  DEVELOPER,
  DILETTANTE,
} from 'src/shared/constants/role';

import {
  stage,
  stageHeader,
  stageTitleImage,
  stageTitle,
  stageTag,
  stageGlobe,
  stageGreeting,
  stageHello,
  stageQuote,
  stageQuoteBody,
  stageQuoteCite,
  stageRoleMenu,
} from './style.module.css';

const Stage = () => {
  const [{role}] = useSettingsContext();

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

  return (
    <header className={`${stage}`}>
      <div  className={stageHeader}>
        <img src="/lilly3_swan.svg" className={stageTitleImage} height="160" width="160" />
        <h1 className={stageTitle}> N.E.Lilly</h1>
        <p className={stageTag}>Amateur Dilettante. Professional UI.</p>
      </div>

      <canvas className={stageGlobe} width="1920" height="1080" ref={globeRef} />

      <div className={stageRoleMenu}>
        <Select />
      </div>

      {role === DEVELOPER && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p className={stageQuoteBody}>Do a spinning globe. A spinning globe sells it every time.</p>
          <cite className={stageQuoteCite}>– The World Wide Web, 1996</cite>
        </blockquote>
      </div>}

      {role === DESIGNER && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p className={stageQuoteBody}>It’s not just what it looks like and feels like. Design is how it works.</p>
          <cite className={stageQuoteCite}>– An apple salesman, 2003</cite>
        </blockquote>
      </div>}

      {role === ARTIST && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p className={stageQuoteBody}>All works of Art are self-portraits.</p>
          <cite className={stageQuoteCite}>– Joseph Ducreux (probably), 1793</cite>
        </blockquote>
      </div>}

      {role === DILETTANTE && <div className={stageGreeting}>
        <p className={stageHello}>“Hello World”</p>
        <blockquote className={stageQuote}>
          <p className={stageQuoteBody}>I wanted to be a professional dabbler but I just never could stick with it.</p>
          <cite className={stageQuoteCite}>– I’m in this photo and I don’t like it, 2017</cite>
        </blockquote>
      </div>}
    </header>
  );
};

export default Stage;
