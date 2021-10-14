import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DEVELOPER } from 'src/shared/constants/role';
import { formatDate } from 'src/shared/functions/formatDate';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import { gallery } from 'src/data/gallery.json';
import {
  galleryItem,
  galleryItemTitle,
  galleryItemImage,
  galleryItemAuthorship,
  galleryItemType,
  galleryItemTime,
  galleryItemDetails,
  galleryItemDescription,
  galleryItemTags,
} from './style.module.css';

export const getStaticProps = async ({ params }) => {
  const list = gallery.filter((p) => p.imageSet.toString() === params.item);
  return {
    props: {
      item: list[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = gallery.map((item) => ({
    params: { item: item.imageSet.toString() },
  }));

  return { paths, fallback: false };
};

const GalleryItem = ({ item: {title, authorship, date, role, tech, image, description} }) => {
  const [currentRole, setCurrentRole] = useState('');
  useEffect(() => {
    setCurrentRole(localStorage.getItem('role', currentRole) || DEVELOPER);
  }, [currentRole, setCurrentRole]);

  return (
  <>
    <Head>
      <title>N.E.Lilly: {title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    </Head>
    <Layout role={currentRole} setRole={setCurrentRole}>
      <article className={galleryItem}>
          <h1 className={galleryItemTitle}>{title}</h1>

          <div className={galleryItemDetails}>
            <p className={galleryItemType}>{role.map((item, index) => <span key={`dev_${item}`}>{item}{/* <Link href={`/role/${keyChange(item)}`}>{item}</Link> */}{index === (role.length - 1) || ', '}</span>)}</p>
            <p className={galleryItemAuthorship}>{authorship}{/* <Link href={`/author/${authorship}`}></Link> */}</p>
            <p className={galleryItemTime}>{formatDate(date, "short")}</p>
          </div>
          <img className={galleryItemImage} src={image} alt="" />
          <p className={galleryItemDescription}>{description}</p>
          <p className={galleryItemTags}>{tech.map((item, index) => <span key={item}>{item}{/* <Link href={`/role/${keyChange(item)}`}>{item}</Link> */}{index === (tech.length - 1) || ', '}</span>)}</p>
      </article>
    </Layout>
  </>
)};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    authorship: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    role: PropTypes.array.isRequired,
    tech: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryItem;
