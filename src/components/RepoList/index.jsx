import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Repo from 'src/components/RepoItem';
import Link from 'next/link';
import {
  repoList,
  repoListTitle,
  repoListContent,
  repoListFooter,
} from './style.module.css';

const RepoList = ({works}) => {

  return (
    <>
      <article className={repoList}>
        <h2 className={repoListTitle}>Code Repositories</h2>
        <section className={repoListContent}>
          {works.map((repo) => <Repo key={repo.name} {...repo} />)}
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
