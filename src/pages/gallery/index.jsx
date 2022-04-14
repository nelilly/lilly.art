import { useEffect, useState } from 'react';
import { DEVELOPER } from 'src/shared/constants/role';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Directory from 'src/components/Directory';
import Filter from 'src/components/Filter';
import RepoList from 'src/components/RepoList';
import filterRepos from 'src/shared/functions/filterRepos';

import { gallery } from 'src/data/gallery.json';

import {
  gallery as galleryStyle,
} from './style.module.css';

// console.log('Thanks for visiting!');

const GalleryPage = () => {
  const [currentRole, setCurrentRole] = useState('');
  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', currentRole) || DEVELOPER);
  }, [currentRole, setCurrentRole]);

  const [keyword, setKeyword] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [projectLanguage, setLanguage] = useState(null);

  const onPageSelect = (event) => {
    setPageNumber(parseInt(event.target.value, 10));
  };

  const articleSearch = (event) => {
    setKeyword(event.target.value);
    setPageNumber(0);
  };

  const selectLanguage = (event) => {
    setLanguage(event.target.value);
    setPageNumber(0);
  };


  let techCount = {};
  
  [].concat.apply([], gallery.map((data) => data.tech))
    .forEach((key) => techCount[key] = isNaN(techCount[key]) ? 1 : techCount[key] + 1);

  const techList = Object.keys(techCount)
    .map((key) => ({ optionLabel: key, optionCount: techCount[key] }))
    .sort((a, b) => ((b.optionLabel.toLowerCase() < a.optionLabel.toLowerCase()) ? 1 : -1));

  const filteredList = gallery
    .filter((data) => {
      if (keyword && projectLanguage) {
        return data.tech
        .map((language) => language.toLowerCase()
          === projectLanguage?.toLowerCase()).includes(true)
          && data.title.toLowerCase().includes(keyword?.toLowerCase());
        // || data.author.toLowerCase().includes(keyword?.toLowerCase());
      }
      if (keyword && !projectLanguage) {
        return data.title.toLowerCase().includes(keyword?.toLowerCase());
        // || data.author.toLowerCase().includes(keyword?.toLowerCase());
      }
      if (!keyword && projectLanguage) {
        return data.tech
          .map((language) => language.toLowerCase()
            === projectLanguage?.toLowerCase()).includes(true);
      }

      return data;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return (
    <>
      <Head>
        <title>N.E.Lilly: Gallery</title>
        <link rel="canonical" href="https://lilly.art/gallery/" />
        <meta property="og:title" content="N.E.Lilly: Gallery" key="title" />
        <meta property="og:url" content="https://lilly.art/gallery/" />
        <meta property="og:description" content="N.E.Lilly: Gallery." />
        <meta property="og:image" content="https://lilly.art/images/og/home.webp" />
        <meta property="twitter:image" content="https://lilly.art/images/og/home.webp" />
        <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, gallery, portfolio, development, design, art, illustration" />
        <meta name="description" content="N.E.Lilly: Gallery." />
      </Head>
      <Layout role={currentRole} setRole={setCurrentRole}>
        <article className={galleryStyle}>
          <h1>Gallery</h1>
          <Filter
            data={filteredList}
            itemType={['Project', 'Projects']}
            currentPage={pageNumber}
            onPageSelect={onPageSelect}
            onSearch={articleSearch}
            onSelect={selectLanguage}
            categoryList={techList}
          />
          <Directory works={filteredList.slice(pageNumber * 10, (pageNumber * 10) + 10)} />
          <RepoList works={filterRepos(gallery)} />
        </article>
      </Layout>
    </>
  )
};

export default GalleryPage
