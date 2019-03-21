import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'alpheios-embedded/dist/alpheios-embedded.min.js';

import 'typeface-arimo';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'perseids-react-components/build/css/index.css';

import 'alpheios-embedded/dist/style/style.min.css';
import 'alpheios-embedded/dist/style/style-embedded.min.css';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
