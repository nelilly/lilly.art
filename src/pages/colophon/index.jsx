import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ARTIST, DESIGNER, DEVELOPER, DILETTANTE } from 'src/shared/constants/role';
import Head from 'next/head';
import { formatDate } from 'src/shared/functions/formatDate';
import Layout from 'src/components/Layout';
import { title } from 'src/data/colophon.json';
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

const Colophon = ({ lastUpdated }) => {
  const [currentRole, setCurrentRole] = useState('');
  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', currentRole) || DEVELOPER);
  }, [currentRole, setCurrentRole]);
  const [browser, setBrowser] = useState({});

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    const { platform, appName, userAgent } = navigator;
    setBrowser({
      innerHeight,
      innerWidth,
      height: window.screen.height,
      width: window.screen.width,
      platform,
      appName,
      userAgent,
    });
  }, []);

  return (
    <>
      <Head>
        <title>N.E.Lilly: Colophon</title>
        <meta property="og:title" content={'title'} key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      </Head>
      <Layout role={currentRole} setRole={setCurrentRole}>
        <article className={colophon}>
          <h1>{title}</h1>
          {currentRole === DESIGNER && <blockquote className={quote}>
            <p>Far too few designers put any thought into usability, ending up with a great product that&rsquo;s completely inaccessible.</p>
            <p className={quoteCitation}>&mdash; James Dyson</p>
          </blockquote>}
          {currentRole === ARTIST && <blockquote className={quote}>
            <p>I am not here to teach you young people any one way to draw — I am here to help you. I want to help you find a purpose, a reason for painting.</p>
            <p className={quoteCitation}>&mdash; John French Sloan</p>
          </blockquote>}
          {currentRole === DEVELOPER && <blockquote className={quote}>
            <p>Software is a great combination between artistry and engineering.</p>
            <p className={quoteCitation}>&mdash; Bill Gates</p>
          </blockquote>}
          {currentRole === DILETTANTE && <blockquote className={quote}>
            <p>From inaccessible mountain range by way of desert untrod by human foot to the ends of the unknown seas, the breath of the everlasting creative spirit is felt, rejoicing over every speck of dust that hearkens to it and lives.</p>
            <p className={quoteCitation}>&mdash; Johann Wolfgang von Goethe</p>
          </blockquote>}
          <section>
            <p>A colophon is a page at the back of a book, originating from the Greek word for “summit”. The purpose of a colophon is to give the reader information about the book&rsquo;s authorship and construction methods. It is the final touch put on the work.</p>
            <p>This site was designed and developed using <a href="https://jamstack.org/">JAM stack principles</a>, the <a href="https://reactjs.org/">React</a> library with <a href="https://nextjs.org/">Next.js</a> and served on <a href="https://pages.github.com/">GitHub Pages</a>.</p>
            <p>It is currently displayed on {browser.platform} platform in the {browser.appName} browser [{browser.userAgent}] with a screen size of {browser.width}  × {browser.height} and document size of {browser.innerWidth} × {browser.innerHeight} (if your browser is being honest).</p>
            <figure style={{textAlign: 'center'}}>
              <svg height="200" width="200" viewBox="0 0 100 100" fill="#fff6" stroke="currentColor">
                <use href="#helm" height="100" width="100" />
              </svg>
            </figure>
            <p>The main navigation icon is a ship&rsquo;s wheel in homage to Netscape Navigator, the inherent nautical theme of the World Wide Web, and because I hate the hamburger.</p>
            <p>This site is not copy protected. Last modified on {lastUpdated}.</p>
          </section>

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
