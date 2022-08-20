import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  juvenilia,
  juveniliaTitle,
  juveniliaContent,
  juveniliaItem,
  juveniliaItemTitle,
  juveniliaItemImage,
} from './style.module.css';

const Juvenilia = ({title, works}) => {

  return (
    <>
      <article className={juvenilia}>
        <h2 className={juveniliaTitle}>{title} Juvenilia</h2>
        <p>Work from the early years.</p>
        <section className={juveniliaContent}>
          {works.map(({title, description, url}) => <article key={title} className={juveniliaItem}>
            <h3 className={juveniliaItemTitle}>{title}</h3>
            <img src={url} alt={description} className={juveniliaItemImage} />
          </article>)}
        </section>
      </article>
    </>
  )};

export default Juvenilia;

Juvenilia.propTypes = {
  title: PropTypes.string.isRequired,
  works: PropTypes.array.isRequired,
  // setIdentity: PropTypes.func.isRequired,
};
