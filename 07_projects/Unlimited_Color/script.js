const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let interval;
  const start = function () {
    if (interval == null) {
      interval = setInterval(changingColor, 1000);
    }
    function changingColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stop = function () {
    clearInterval(interval);
    interval = null;
  };
  
  document.getElementById('stop').addEventListener('click', stop);
  document.getElementById('start').addEventListener('click', start);
  