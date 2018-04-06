const $ = require('jquery');

window.addEventListener('load', function() {
  console.log('load event');

  $('h1').on('click', function() {
    console.log('click');
  });

  console.log('lala');
});