import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ARTIST, DESIGNER, DEVELOPER, DILETTANTE } from 'src/shared/constants/role';
import Head from 'next/head';
import { useSettingsContext } from 'src/shared/context/Settings';
import { formatDate } from 'src/shared/functions/formatDate';
import Layout from 'src/components/Layout';
import BarChart from 'src/components/BarChart';
import { title } from 'src/data/colophon.json';
import osData from 'src/data/csv/os.json';
import browserData from 'src/data/csv/browser.json';
import resolutionData from 'src/data/csv/resolution.json';
import deviceData from 'src/data/csv/device.json';
import {
  colophon,
  end,
  quote,
  quoteCitation,
} from './style.module.css';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const browserName = ( userAgent ) => {
  const ieAgent = userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('rv:') > -1;
  const chromeAgent = userAgent.indexOf('Chrome') > -1;
  const edgeAgent = userAgent.indexOf('Edg') > -1;
  const firefoxAgent = userAgent.indexOf('Firefox') > -1;
  const operaAgent = userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OP') > -1;
  const safariAgent = userAgent.indexOf('Safari') > -1;

  if((operaAgent)){ return 'Opera'; }
  if((edgeAgent)){ return 'Microsoft Edge'; }
  if((chromeAgent)){ return 'Chrome'; }
  if((safariAgent)){ return 'Safari'; }
  if((firefoxAgent)){ return 'Firefox'; }
  if((ieAgent)){ return 'Internet Explorer'; }
      
  return 'an unknown';
}

const os = (platform) => {
  if(platform === false || platform === null){ return 'Unknown'}
  if(platform.indexOf('Linux') > -1){ return 'Linux'}
  if(platform.indexOf('iP') > -1){ return 'iOS'}
  if(platform.indexOf('Mac') > -1){ return 'OS X'}
  if(platform.indexOf('Sun') > -1){ return 'Solaris'}
  if(platform.indexOf('Win') > -1){ return 'Windows'}

  return platform;
}

const device = ( userAgent ) => {
  if((/nintendo|playstation|psp|xbox/i.test(userAgent.toLowerCase()))){ return 'Console'}
  if((/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|xoom|sch-i800|pixel c|sm-t827r4|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(userAgent.toLowerCase()))){ return 'Tablet'}
  if((/mobile|ipad|phone|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent.toLowerCase()))){ return 'Mobile'}

  return 'Desktop';
}

const rendering = ( userAgent ) => {
  const blinkRender = (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Windows') > -1) || userAgent.indexOf('OPR') > -1;
  const edgeRender = userAgent.indexOf('Xbox') > -1;
  const geckoRender = userAgent.indexOf('Gecko') > -1;
  const prestoRender = userAgent.indexOf('Opera') > -1;
  const tridentRender = userAgent.indexOf('Trident') > -1;
  const webKitRender = userAgent.indexOf('WebKit') > -1;

  if((prestoRender)){ return 'the Presto'; }
  if((tridentRender)){ return 'the Trident'; }
  if((edgeRender)){ return 'the EdgeHTML'; }
  if((blinkRender)){ return 'the Blink'; }
  if((webKitRender)){ return 'the WebKit'; }
  if((geckoRender)){ return 'the Gecko'; }
      
  return 'an unknown';
}

const Colophon = ({ lastUpdated }) => {
  const [settings] = useSettingsContext();
  const [browser, setBrowser] = useState({});

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    const { platform, userAgent } = navigator;
    setBrowser({
      browserFamily: browserName(userAgent),
      rendering: rendering(userAgent),
      innerHeight,
      innerWidth,
      height: window.screen.height,
      width: window.screen.width,
      os: os(platform),
      device: device(userAgent),
      userAgent,
    });
  }, []);

  return (
    <>
      <Head>
        <title>N.E.Lilly: Colophon</title>
        <link rel="canonical" href="https://lilly.art/colophon/" />
        <meta property="og:title" content="N.E.Lilly: Colophon" key="title" />
        <meta property="og:url" content="https://lilly.art/colophon/" />
        <meta property="og:description" content="N.E.Lilly: Colophon." />
        <meta property="og:image" content="https://lilly.art/images/og/home.webp" />
        <meta property="twitter:image" content="https://lilly.art/images/og/home.webp" />
        <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, colophon, portfolio, development, design, art, illustration" />
        <meta name="description" content="N.E.Lilly: Colophon." />
      </Head>
      <Layout>
        <article className={colophon}>
          <h1>{title}</h1>
          {settings.role === DESIGNER && <blockquote className={quote}>
            <p>Far too few designers put any thought into usability, ending up with a great product that&rsquo;s completely inaccessible.</p>
            <p className={quoteCitation}>&mdash; James Dyson</p>
          </blockquote>}
          {settings.role === ARTIST && <blockquote className={quote}>
            <p>I am not here to teach you young people any one way to draw — I am here to help you. I want to help you find a purpose, a reason for painting.</p>
            <p className={quoteCitation}>&mdash; John French Sloan</p>
          </blockquote>}
          {settings.role === DEVELOPER && <blockquote className={quote}>
            <p>Software is a great combination between artistry and engineering.</p>
            <p className={quoteCitation}>&mdash; Bill Gates</p>
          </blockquote>}
          {settings.role === DILETTANTE && <blockquote className={quote}>
            <p>From inaccessible mountain range by way of desert untrod by human foot to the ends of the unknown seas, the breath of the everlasting creative spirit is felt, rejoicing over every speck of dust that hearkens to it and lives.</p>
            <p className={quoteCitation}>&mdash; Johann Wolfgang von Goethe</p>
          </blockquote>}
          <section>
            <p>A colophon is a page at the back of a book, originating from the Greek word for “summit”. The purpose of a colophon is to give the reader information about the book&rsquo;s authorship and construction methods. It is the final touch put on the work.</p>
            <p>This site was designed and developed using <a href="https://jamstack.org/">JAM stack principles</a>, the <a href="https://reactjs.org/">React</a> library with <a href="https://nextjs.org/">Next.js</a> and served on <a href="https://pages.github.com/">GitHub Pages</a>.</p>
            <p>It is currently displayed on {browser.os} operating system in {browser.browserFamily} browser using {browser.rendering} rendering engine with a screen size of {browser.width}×{browser.height} and document size of {browser.innerWidth}×{browser.innerHeight} (if your browser is being honest).</p>
            
            <h2>User Comparison</h2>
            <BarChart title="Operating System" details="The Android operating system is the current usage leader, followed closely by Windows and the combined iOS/OSX operating systems." userValue={browser.os} chartData={osData} />
            <BarChart title="Browser" details="Chrome maintains the vast majority of the browser market worldwide, while use of Internet Explorer has dropped to less that 1%." userValue={browser.browserFamily} chartData={browserData} />
            <BarChart title="Screen Resolution" details="Screen resolution is highly fractured, underscoring the importance of using proper responsive techniques." userValue={`${browser.width}×${browser.height}`} chartData={resolutionData} />
            <BarChart title="Devices" details="Globally, mobile devices are increasingly important while the use of game consoles for Internet access languishes." userValue={browser.device} chartData={deviceData} />
            {/* <p>Your reported user agent string is: <code>{browser.userAgent}</code></p> */}
            <p>Source: <a href="https://statcounter.com/">Statcounter</a> Worldwide statistics (Aug 2020).</p>
          </section>
          <section>
            <h2>Navigation Icon</h2>
            <figure style={{textAlign: 'center', margin: '1rem 0'}}>
              <figcaption style={{textAlign: 'left'}}><p>The main navigation icon is a ship’s wheel in homage to Netscape Navigator, the inherent nautical theme of the World Wide Web, and because I hate the hamburger.</p></figcaption>
              <svg height="200" width="200" viewBox="0 0 100 100" fill="#fff6" stroke="currentColor">
                <use href="#helm" height="100" width="100" />
              </svg>
            </figure>
          </section>
          <section>
            <h2>N.E.Lilly Logo</h2>
            <figure style={{textAlign: 'center', margin: '1rem 0'}}>
              <figcaption style={{textAlign: 'left'}}><p>The site logo is a minimalist design by N.E.Lilly based on the coat of arms of Thomas Lilly of Bromsgrove (1502 - 1572), as described in Burke’s General Armory. <q>3 white lilies on a field of red, with a swan crest.</q></p></figcaption>
              <img src="/lilly3_swan.svg" height="200" width="200" alt="3 white lilies on a field of red, with a swan crest." />
            </figure>
          </section>
          <p>This site is not copy protected. Last modified on {lastUpdated}.</p>

          <p className={end}>♠</p>
        </article>
      </Layout>
    </>
  );
};

Colophon.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

export default Colophon;
