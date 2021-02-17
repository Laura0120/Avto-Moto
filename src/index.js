import React from 'react';
import ReactDom from 'react-dom';

import App from './js/components/app';

require('./scss/style.scss');

ReactDom.render(<App />, document.querySelector(`#root`));
