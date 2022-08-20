import PropTypes from 'prop-types';
import RepoItem from 'src/components/RepoItem';
import {
  repoList,
  repoListTitle,
  repoImage,
  repoListContent,
  repoListFooter,
} from './style.module.css';

const RepoList = ({works}) => {

  return (
    <>
      <article className={repoList}>
        <h2 className={repoListTitle}>The Good Parts</h2>
        <img src="/images/danaus_chrysippus.webp" alt="danaus chrysippus" className={repoImage} />
        <section className={repoListContent}>
          {works.map((repo) => <RepoItem key={repo.repository.name} name={repo.repository.name} link={repo.repository.link} description={repo.description} tech={repo.tech} />)}
        </section>
        <a className={repoListFooter} href="https://github.com/nelilly?tab=repositories">View all repositories on GitHub</a>
      </article>
    </>
  )};

export default RepoList;

RepoList.propTypes = {
  works: PropTypes.array.isRequired,
  // setIdentity: PropTypes.func.isRequired,
};
