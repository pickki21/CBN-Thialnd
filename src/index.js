import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'
import 'bulma-extensions'
import 'bulma-extensions/bulma-pricingtable/dist/css/bulma-pricingtable.min.css'
import 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'
import 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.js'
import 'bulma-extensions/bulma-carousel/src/sass/index.sass'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
