import PropTypes from 'prop-types';
import Link from 'next/link';
import { keyChange } from 'src/shared/functions/keyChange';
import { formatDate } from 'src/shared/functions/formatDate';
import {vh} from 'src/shared/styles/style.module.css';
import { 
  directory,
  directoryItem,
  directoryItemImage,
  directoryItemCaption,
  directoryItemTitle,
  directoryItemType,
  directoryItemAuthorship,
  directoryItemTime,
  directoryItemDetails,
  directoryItemDescription,
  directoryItemTags,
  directoryFooter,
} from './style.module.css';

const Directory = ({show, works}) => {

  return (
    <>
      <article className={directory}>
        {
          works.map(({title, image, authorship, date, role, description, tech}) => 
          <article key={`dev_${keyChange(title)}`} className={directoryItem}>
            <div className={directoryItemImage}>
              <img src={image} alt="" />
            </div>
            <div className={directoryItemCaption}>
              <header>
                <h3 className={directoryItemTitle}><Link href={`/gallery/${keyChange(title)}`}>{title}</Link></h3>
                <div className={directoryItemDetails}>
                  <p className={directoryItemType}>{role.map((item, index) => <span key={`dev_${keyChange(title)}_${keyChange(item)}`}>{item}
                    {/* <Link href={`/role/${keyChange(item)}`}>{item}</Link> */}{index === (role.length - 1) || ', '}</span>)}</p>
                  <p className={directoryItemAuthorship}>{authorship}{/* <Link href={`/author/${authorship}`}>{authorship}</Link> */}</p>
                  <p className={directoryItemTime}>{formatDate(date, 'short')}</p>
                </div>
              </header>
              <p className={directoryItemDescription}>{description}</p>
              <div className={directoryItemTags}>
                <span className={vh}>Technology</span> {tech.map((item, index) => <span key={`dev_${keyChange(title)}_${keyChange(item)}`}>{item}{/* <Link href={`/technology/${keyChange(item)}`}>{item}</Link> */}{index === (tech.length - 1) || ', '}</span>)}
              </div>
            </div>
          </article>
          )
        }
        {show && <Link href="/gallery/"><a className={directoryFooter}>View the entire Gallery</a></Link>}
      </article>
    </>
  );
};

export default Directory;

Directory.propTypes = {
  show: PropTypes.bool.isRequired,
  works: PropTypes.array.isRequired,
};
