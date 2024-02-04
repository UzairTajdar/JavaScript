const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach(function (button) {

  button.addEventListener('click', function (e) {
    
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'aqua':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
