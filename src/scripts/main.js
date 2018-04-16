require('../styles/main.scss');

const $ = require('jquery');

const varMuyLarga = '10';

window.addEventListener('load', function() {
  console.log('load event', varMuyLarga);

  $('h1').on('click', function() {
    console.log('click');
  });

  console.log('lala');
});