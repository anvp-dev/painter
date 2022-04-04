'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const paintContent = document.querySelector('.paint__content');
  const eraser = document.querySelector('.eraser__btn');
  const chosenColor = document.querySelector('.current-color');
  const clearBtn = document.querySelector('.clear__btn');

  let pixel = 229;  

  const setPaintFiled = (pixel) => {
    let screenWidth = window.screen.width,
        screenHeight = window.screen.height,
        pixels = Math.trunc((screenWidth * screenHeight) / pixel);        

    function createPixel() {
      let pixel = document.createElement('div');
      pixel.classList.add('screen-pixel');
      paintContent.appendChild(pixel);
    }

    for (let i = 0; i < pixels; i++) {
      createPixel();
    }
  };
  setPaintFiled(pixel);

  let currentColor = '#212121';
  const colors = {
    purple: '#755D9A',
    lilac: '#E040FB',
    pink: '#FF97BB',
    blue: '#1976D2',
    orange: '#ff693b',
    green: '#4CAF50',
    yellow: '#FFEB3B',
    red: '#D32F2F',
    brown: '#795548',
    black: '#212121',
    white: '#fff',
  };

  const colorButtons = document.querySelectorAll('.paint__aside-item');
  colorButtons.forEach(item => {
    item.addEventListener('click', painting => {
      const id = item.id;
      currentColor = colors[id];
      chosenColor.style.backgroundColor = currentColor;
    });
  });


  let mouseDown = false;  
  document.addEventListener('mousedown', () => {
    mouseDown = true; 
  })
  
  document.addEventListener('mouseup', () => {
    mouseDown = false;
  })
  
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();    
  })

  function painting() {
    document.addEventListener('mousemove', e => {
      const target = e.target;

      if (mouseDown && target.classList.contains('screen-pixel')) {
        target.style.backgroundColor = currentColor;
      } 
    });
  }
  painting()
  
  eraser.addEventListener('click', () => {
    chosenColor.style.backgroundColor = '#fff';
    currentColor = '#fff';
  })

  clearBtn.addEventListener('click', () => {
    const clearField = document.querySelectorAll('.screen-pixel');
    clearField.forEach(item => item.style.backgroundColor = '#fff'); 
  })
});
