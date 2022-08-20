import { useState } from 'react';
import Head from 'next/head';
import Layout from 'src/components/Layout';
// import Hero from 'src/components/Hero';
// import Jumbotron from 'src/components/Jumbotron';
import Stage from 'src/components/Stage';
import Directory from 'src/components/Directory';
import FunHouse from 'src/components/FunHouse';
import RepoList from 'src/components/RepoList';
import Gallery from 'src/components/Gallery';
import Juvenilia from 'src/components/Juvenilia';
import Slides from 'src/components/Slides';
import Shelf from 'src/components/Shelf';

import {
  gallery,
  generativeSlides,
  sketchSlides,
  paintingSlides,
  artistShelf,
  developerShelf,
  designShelf,
  dilettanteShelf,
} from 'src/data/gallery.json';
import juvenilia from 'src/data/juvenilia.json';
import * as role from 'src/shared/constants/role';
const { ARTIST, DESIGNER, DEVELOPER, DILETTANTE } = role;
import filterRole from 'src/shared/functions/filterRole';
import filterRepos from 'src/shared/functions/filterRepos';

console.log('Thanks for visiting! Check out the Colophon if you’re interested in how this site is put together: https://lilly.art/colophon');

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState('');
  
  return (
    <>
      <Head>
        <title>N.E.Lilly: portfolio of art, development, and design</title>
        <link rel="canonical" href="https://lilly.art/" />
        <meta property="og:title" content="N.E.Lilly: portfolio of art, development, and design" key="title" />
        <meta property="og:url" content="https://lilly.art/" />
        <meta property="og:description" content="N.E.Lilly: portfolio of art, development, and design." />
        <meta property="og:image" content="https://lilly.art/images/og/home.webp" />
        <meta property="twitter:image" content="https://lilly.art/images/og/home.webp" />
        <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, portfolio, development, design, art, illustration" />
        <meta name="description" content="N.E.Lilly: portfolio of art, development, and design." />
      </Head>
      <Layout role={currentRole} setRole={setCurrentRole}>
        {/* <Hero role={currentRole} setRole={setCurrentRole} works={gallery} /> */}
        <Stage role={currentRole} setRole={setCurrentRole} works={gallery} />
        {/* <Jumbotron role={currentRole} setRole={setCurrentRole} works={gallery} /> */}
        {/* It’s a fine line between design, illustration, and art. */}
        {/* Design is a discipline. Development is a discipline. Art is a discipline. */}
        {/* <section>
          <h1>PROCESS</h1>
          <p>Whether it’s developing an application or painting an illustration a creator tends to go though many of the same steps.</p>
          <ul>
            <li>Concept/Exploration/Workshops</li>
            <li>Mood board</li>
            <li>Outline</li>
            <li>Style Guide/Design Systems/Technique</li>
            <li>Personas</li>
            <li>Ümwelt</li>
            <li>Journey Map</li>
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
        {currentRole === DEVELOPER && <RepoList works={filterRepos(gallery)} />}
        {currentRole === DEVELOPER && <Directory works={filterRole(gallery, "Development").slice(0, 10)} show={true} />}
        {currentRole === DESIGNER && <Directory works={filterRole(gallery, "Design").slice(0, 10)} show={true} />}
        {currentRole === ARTIST && <>
          <section style={{padding: '3rem 4rem 3rem'}}>
            <h2>Topics in Art</h2>
            <p>Traditional sketches, paintings, electronic media, photo bashing, digital collages, generative art, responsive art, 3d art, art as code, &amp; code as art.</p>
          </section>

          <Slides slides={generativeSlides.slides} title={generativeSlides.title} description={generativeSlides.description} display="split" />
          <Slides slides={sketchSlides.slides} title={sketchSlides.title} description={sketchSlides.description} />
          <Slides slides={paintingSlides.slides} title={paintingSlides.title} description={paintingSlides.description} />
        </>}
        {(currentRole === ARTIST || currentRole === DESIGNER) && <Gallery works={filterRole(gallery, "Illustration")} />}
        {currentRole === DILETTANTE && <FunHouse />}
        {currentRole === DESIGNER && <Juvenilia title="Design" description="Early work in Commercial Art." works={juvenilia.designer} />}
        {currentRole === ARTIST && <><Juvenilia title="Life Drawing" description="Sketches and studies from the early years." works={juvenilia.life} /><Juvenilia title="Art" description="Personal works from the early years." works={juvenilia.artist} /></>}
        {/* {currentRole === DILETANTE && <Shelf title="An Intermittent Journal" />} */}
        {currentRole === DEVELOPER && <Shelf color="#000" canvas="#f0db4f" title={developerShelf.title} books={developerShelf.books} />}
        {currentRole === DESIGNER && <Shelf color="#000" canvas="#e24b27" title={designShelf.title} books={designShelf.books} />}
        {currentRole === ARTIST && <Shelf color="#fff" canvas="#a00" title={artistShelf.title} books={artistShelf.books} />}
        {currentRole === DILETTANTE && <Shelf color="#fff" canvas="#0a0" title={dilettanteShelf.title} books={dilettanteShelf.books} />}
      </Layout>
    </>
  )
};

export default HomePage;
