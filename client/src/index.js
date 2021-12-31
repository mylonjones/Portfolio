import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(<App/>, document.getElementById('App'))