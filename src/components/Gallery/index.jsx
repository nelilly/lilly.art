import Link from 'next/link';
import { 
  gallery,
  galleryTitle,
  galleryContent,
  galleryItem,
  galleryContainer,
  galleryFooter,
} from './style.module.css';

const Gallery = () => {

  return (
    <>
      <article className={gallery}>
        <h2 className={galleryTitle}>Illustration Station</h2>
        <section className={galleryContent}>
          <figure className={galleryItem}>
            <div className={galleryContainer}>
              <img src="images/illustration/nathan-e-lilly-clonewrangler.jpg" alt="The Clone-Wrangler&rsquo;s Bride" title="The Clone-Wrangler&rsquo;s Bride" />
            </div>
            <figcaption>The Clone-Wrangler&rsquo;s Bride</figcaption>
          </figure>
          <figure className={galleryItem}>
            <div className={galleryContainer}>
              <img src="images/illustration/nathan-e-lilly-craphound.jpg" alt="Craphound" title="Craphound" />
            </div>
            <figcaption>Craphound</figcaption>
          </figure>
          <figure className={galleryItem}>
            <div className={galleryContainer}>
              <img src="images/illustration/nathan-e-lilly-horsethieves.jpg" alt="Horse Thieves" title="Horse Thieves" />
            </div>
            <figcaption>Horse Thieves</figcaption>
          </figure>
          <figure className={galleryItem}>
            <div className={galleryContainer}>
              <img src="images/illustration/nathan-e-lilly-kin.jpg" alt="Kin" title="Kin" />
            </div>
            <figcaption>Kin</figcaption>
          </figure>
          <figure className={galleryItem}>
            <div className={galleryContainer}>
              <img src="images/illustration/nathan-e-lilly-lasttasteofmanna.jpg" alt="Last Taste of Manna" title="Last Taste of Manna" />
            </div>
            <figcaption>Last Taste of Manna</figcaption>
          </figure>
          <figure className={galleryItem}>
            <div className={galleryContainer}>
              <img src="images/illustration/nathan-e-lilly-limerick2007.jpg" alt="Space Western Limerick Contest" title="Space Western Limerick Contest" />
            </div>
            <figcaption>Space Western Limerick Contest</figcaption>
          </figure>
        </section>
        <Link href="https://nelilly.artstation.com/"><a className={galleryFooter}>View all illustrations on Art Station</a></Link>
      </article>
    </>
  );
};

export default Gallery;
