import PropTypes from 'prop-types';
import {
  juvenilia,
  juveniliaTitle,
  juveniliaContent,
  juveniliaItem,
  juveniliaItemTitle,
  juveniliaItemImage,
} from './style.module.css';

const Juvenilia = ({title, description = "Work from the early years.", works}) => {

  return (
    <>
      <article className={juvenilia}>
        <h2 className={juveniliaTitle}>{title} Juvenilia</h2>
        <p>{description}</p>
        <section className={juveniliaContent}>
          {works.map(({title, description, url}) => <article key={title} className={juveniliaItem}>
            <h3 className={juveniliaItemTitle}>{title}</h3>
            <img src={url} alt={description} title={`${title}${description && `: ${description}`}`} className={juveniliaItemImage} />
          </article>)}
        </section>
      </article>
    </>
  )};

export default Juvenilia;

Juvenilia.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  works: PropTypes.array.isRequired,
  // setIdentity: PropTypes.func.isRequired,
};
