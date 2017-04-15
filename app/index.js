import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','kasia'], ' ');

  const dominik = 'dominik';
  console.log(dominik);


  return element;
}

document.body.appendChild(component());
