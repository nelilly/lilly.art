import PropTypes from 'prop-types';
import Link from 'next/link';
import { 
  gallery,
  galleryTitle,
  galleryContent,
  galleryItem,
  galleryContainer,
  galleryFooter,
} from './style.module.css';

const Gallery = ({works}) => {

  return (
    <>
      <article className={gallery}>
        <h2 className={galleryTitle}>Illustration Station</h2>
        <section className={galleryContent}>
          {works.map((work) => (
              <figure className={galleryItem} key={work.title}>
                <div className={galleryContainer}>
                  <img src={work.image} alt={work.title} title={work.title} />
                </div>
                <figcaption>{work.title}</figcaption>
              </figure>
            ))}
        </section>
        <Link href="https://nelilly.artstation.com/"><a className={galleryFooter}>View all illustrations on Art Station</a></Link>
      </article>
    </>
  );
};

Gallery.propTypes = {
  works: PropTypes.array.isRequired,
};

export default Gallery;
