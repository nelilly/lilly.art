import { useState } from 'react';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Directory from 'src/components/Directory';
import FunHouse from 'src/components/FunHouse';
import RepoList from 'src/components/RepoList';
import Gallery from 'src/components/Gallery';
import Shelf from 'src/components/Shelf';

import { gallery, repositories, artistShelf, developerShelf, designShelf } from 'src/data/gallery.json';
import { ARTIST, DESIGNER, DEVELOPER, DILETTANTE } from 'src/shared/constants/role';

console.log('Thanks for visiting!');

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState('');
  
  return (
    <>
      <Head>
        <title>N.E.Lilly: portfolio of art, development, and design</title>
        <meta property="og:title" content={'title'} key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      </Head>
      <Layout className="DarkLayout" role={currentRole} setRole={setCurrentRole}>
        <Hero role={currentRole} setRole={setCurrentRole} works={gallery} />
        {/* It’s a fine line between design, illustration, and art. */}
        {/* Design is a discipline. Development is a discipline. Art is a discipline. */}
        {/* <section>
          <h1>PROCESS</h1>
          <p>Whether it’s developing an application or painting an illustration a creator tends to go though many of the same steps.</p>
          <ul>
            <li>Concept/Exploration/Workshops</li>
            <li>Mood board</li>
            <li>Outline</li>
            <li>Style Guide/Design Systems</li>
            <li>Ümwelt</li>
            <li>Personas</li>
            <li>Wireframe</li>
            <li>Prototype</li>
            <li>Architecture</li>
            <li>Development</li>
          </ul>
        </section> */}
        {/* <section>
          <h2>Presentations</h2>
          <ul>
            <li>I &hearts; SVGs</li>
            <li>A Tour of the URL</li>
            <li>JS + A11Y</li>
            <li>Building Accessibility Testing Into Your Workflow</li>
          </ul>
        </section> */}
        {currentRole === DEVELOPER && <RepoList works={repositories} />}
        {(currentRole === DEVELOPER || currentRole === DESIGNER) && <Directory works={gallery.slice(0, 4)} />}
        {/* <section>
          <h3>Widgets</h3>
          <section style={{padding: '2rem'}}>
            <h4>Accessible Parallax Carousel Proof of Concept</h4>
            <p className="codepen" data-height="640" data-theme-id="light" data-default-tab="result" data-user="nelilly" data-slug-hash="JjYrOZw" style={{height: '640px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}} data-pen-title="Parallax Carousel">
              <span>See the Pen <a href="https://codepen.io/nelilly/pen/JjYrOZw">
              Parallax Carousel</a> by Nathan E. Lilly (<a href="https://codepen.io/nelilly">@nelilly</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
          </section>
          <section style={{padding: '2rem'}}>
            <h4>Understanding feColorMatrix</h4>
            <p className="codepen" data-height="640" data-theme-id="light" data-default-tab="result" data-user="nelilly" data-slug-hash="WKRNNw" style={{height: '640px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}} data-pen-title="feColorMatrix">
              <span>See the Pen <a href="https://codepen.io/nelilly/pen/WKRNNw">
              feColorMatrix</a> by Nathan E. Lilly (<a href="https://codepen.io/nelilly">@nelilly</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          </section>
          <section style={{padding: '2rem'}}>
            <h4>Understanding feConvolveMatrix</h4>
            <p className="codepen" data-height="640" data-theme-id="light" data-default-tab="result" data-user="nelilly" data-slug-hash="MBmjBB" style={{height: '640px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}} data-pen-title="feConvolveMatrix">
              <span>See the Pen <a href="https://codepen.io/nelilly/pen/MBmjBB">
              feConvolveMatrix</a> by Nathan E. Lilly (<a href="https://codepen.io/nelilly">@nelilly</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
            <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          </section>
          <section>
            <Shelf title={developerShelf.title} books={developerShelf.books} />
          </section>
        </section> */}
        <section>
        {(currentRole === ARTIST || currentRole === DESIGNER) && <Gallery works={gallery} />}
        </section>
        {currentRole === DILETTANTE && <FunHouse />}
        {/* <Shelf title="An Intermittent Journal" /> */}
        {currentRole === DEVELOPER && <Shelf color="#000" canvas="#f0db4f" title={developerShelf.title} books={developerShelf.books} />}
        {currentRole === DESIGNER && <Shelf color="#000" canvas="#e24b27" title={designShelf.title} books={designShelf.books} />}
        {currentRole === ARTIST && <Shelf color="#fff" canvas="#a00" title={artistShelf.title} books={artistShelf.books} />}
      </Layout>
    </>
  )
};

export default HomePage;
