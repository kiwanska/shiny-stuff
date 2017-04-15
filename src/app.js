import _ from 'lodash';
require('./styles/base.scss');

function component () {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello','dominik'], ' ');

  const dominik = 'dominik';
  console.log(dominik);

  return element;
}

document.body.appendChild(component());
