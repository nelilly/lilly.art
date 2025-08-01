import PropTypes from 'prop-types';
import { keyChange } from 'src/shared/functions/keyChange';
import {
  repoItem,
  repoItemTitle,
  repoItemIcon,
  repoItemDescription,
  repoItemMeta,
  repoItemTech,
} from './style.module.css';

const RepoItem = ({name, link, description, tech}) => {

  return (
    <article className={repoItem}>
      <div className={repoItemTitle}>
        <svg className={repoItemIcon} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
        <a href={link}>{name}</a>        
      </div>
      <p className={repoItemDescription}>{description}</p>

      <p className={repoItemMeta}>
        <span className={repoItemTech}>
          {tech.map((item, index) => <span key={keyChange(item)}>{item}{/* <Link href={`/technology/${keyChange(item)}`}>{item}</Link> */}{index === (tech.length - 1) || ', '}</span>)}
        </span>
      </p>
    </article>
  )};

export default RepoItem;

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

