import React from 'react';
import PropTypes from 'prop-types';
import { SettingsProvider } from 'src/shared/context/Settings';
import './styles.css';

export default function MyApp({ Component, pageProps }) {
  return <SettingsProvider><Component {...pageProps} /></SettingsProvider>;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
