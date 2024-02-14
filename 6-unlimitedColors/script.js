// getting random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

let intervalID;
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changebgColor, 1000);
  }
  function changebgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  console.log('Started');
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
  console.log('Stopped');
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
