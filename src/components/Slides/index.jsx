import PropTypes from 'prop-types';
import { keyChange } from 'src/shared/functions/keyChange';
import { 
  slides as slidesStyle,
  slidesTitle,
  slideList,
  slide,
  split,
  quarters,
} from './style.module.css';

const Slides = ({slides, title, description, display}) => {

  return (
    <article className={`${slidesStyle} ${display === "split" ? split : quarters}`}>
      <h3 className={slidesTitle}>{title}</h3>
      <p>{description}</p>
      <div className={slideList}>
        {slides.map(({title, image, description}) => (
          <figure key={`slide_${keyChange(title)}}`} className={slide}>
            <img src={image} alt={title} title={`${title}${description && `: ${description}`}`} />
            {/* <figcaption>{title}</figcaption> */}
          </figure>)
        )}
      </div>
    </article>
  );
};

export default Slides;

Slides.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  display: PropTypes.string,
};
