import { useEffect, useState } from 'react';
import { DEVELOPER } from 'src/shared/constants/role';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Directory from 'src/components/Directory';
import RepoList from 'src/components/RepoList';

import { gallery, repositories } from 'src/data/gallery.json';

import {
  gallery as galleryStyle,
} from './style.module.css';

// console.log('Thanks for visiting!');

const GalleryPage = () => {
  const [currentRole, setCurrentRole] = useState('');
  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', currentRole) || DEVELOPER);
  }, [currentRole, setCurrentRole]);
  
  return (
    <>
      <Head>
        <title>N.E.Lilly: Gallery</title>
        <meta property="og:title" content={'title'} key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      </Head>
      <Layout role={currentRole} setRole={setCurrentRole}>
        <article className={galleryStyle}>
          <h1>Gallery</h1>
          {/* <p>[FILTERS]</p> */}
          <Directory works={gallery.slice(0, 10)} />
          <RepoList works={repositories} />
        </article>
      </Layout>
    </>
  )
};

export default GalleryPage
