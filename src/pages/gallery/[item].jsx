import PropTypes from 'prop-types';
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

const GalleryItem = ({ item: {title, authorship, date, role, tech, image, imageSet, description} }) => {

  return (
  <>
    <Head>
      <title>N.E.Lilly: {title}</title>
      <meta property="og:title" content={`${title} - N.E.Lilly`} key="title" />
      <link rel="canonical" href={`https://lilly.art/gallery/${imageSet}`} />
      <meta property="og:title" content={`${title} - N.E.Lilly`} key="title" />
      <meta property="og:url" content={`https://lilly.art/gallery/${imageSet}`} />
      <meta property="og:description" content={`${title}: ${description} - N.E.Lilly`} />
      <meta property="og:image" content="https://lilly.art/images/og/home.webp" />
      <meta property="twitter:image" content="https://lilly.art/images/og/home.webp" />
      <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, gallery, portfolio, development, design, art, illustration" />
      <meta name="description" content={`${title}: ${description} - N.E.Lilly`} />
    </Head>
    <Layout>
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
    imageSet: PropTypes.string,
    role: PropTypes.array.isRequired,
    tech: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryItem;
