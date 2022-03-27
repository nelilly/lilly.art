import PropTypes from 'prop-types';
import Link from 'next/link';
import { keyChange } from 'src/shared/functions/keyChange';
import { formatDate } from 'src/shared/functions/formatDate';
import {vh} from 'src/shared/styles/style.module.css';
import { 
  card,
  cardItem,
  cardItemImage,
  cardItemCaption,
  cardItemTitle,
  cardItemType,
  cardItemAuthorship,
  cardItemTime,
  cardItemDetails,
  cardItemDescription,
  cardItemTags,
  active,
  inactive,
} from './style.module.css';

const Card = ({title, image, authorship, date, role, description, tech, currentSlide, index}) => {

  return (
    <>
      <article className={`${card} ${index === currentSlide ? active : inactive}`}>
        <article className={cardItem}>
          <div className={cardItemCaption}>
            <header>
              <h3 className={cardItemTitle}><Link href={`/gallery/${keyChange(title)}`}>{title}</Link></h3>
              <p className={cardItemType}>{role.map((item, index) => <span key={`dev_${keyChange(title)}_${keyChange(item)}`}><Link href={`/role/${keyChange(item)}`}>{item}</Link>{index === (role.length - 1) || ', '}</span>)}</p>
            </header>
            <p className={cardItemDescription}>{description}</p>
            <div className={cardItemDetails}>
              <p className={cardItemAuthorship}><Link href={`/author/${authorship}`}>{authorship}</Link></p>
              <p className={cardItemTime}>{formatDate(date, 'short')}</p>
              <div className={cardItemTags}>
                <span className={vh}>Technology</span> {tech.map((item, index) => <span key={`dev_${keyChange(title)}_${keyChange(item)}`}><Link href={`/technology/${keyChange(item)}`}>{item}</Link>{index === (tech.length - 1) || ', '}</span>)}
              </div>
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  authorship: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentSlide: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  tech: PropTypes.array.isRequired,
  role: PropTypes.array.isRequired,
};
