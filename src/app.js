import _ from 'lodash';
import header from './js/header.js';
import charts from './js/charts.js';
import footer from './js/footer.js';
require('./styles/all.scss');

function app() {
  const element = document.querySelector('#root');
  element.innerHTML = _.join([header(), footer()], '');
  charts();
  return element;
}

app();
