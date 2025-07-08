"use strict";

let boxElem = document.getElementById('box');
let pointerElem = document.getElementById('pointer');
let activePointer = false;

function onLoadDisable() {
  pointerElem.classList.remove('box-pointer-show');
  pointerElem.classList.add('box-pointer-hidden');
  pointerElem.style= "display: inline-block";
}


function onMouseMove(event) {
  let mouseX = event.clientX * 0.9 - 30;
  let mouseY = event.clientY * 1.1 - 35;
  let crd = boxElem.getBoundingClientRect();
  let activePointer = crd.left * 0.9 - 30 <= mouseX && mouseX <= crd.right && crd.top * 1.1 - 35<= mouseY && mouseY <= crd.bottom;

  requestAnimationFrame(function movePointer() {
    if (activePointer) {
      pointerElem.classList.remove('box-pointer-hidden');
      pointerElem.classList.add('box-pointer-show');
      pointerElem.style.left = Math.floor(mouseX) + 'px';
      pointerElem.style.top = Math.floor(mouseY) + 'px';
    } else {
      pointerElem.classList.add('box-pointer-hidden');
      pointerElem.classList.remove('box-pointer-show');
    }
  });
}

function disablePointer() {
  requestAnimationFrame(function hidePointer() {
    pointerElem.classList.add('box-pointer-hidden');
    pointerElem.classList.remove('box-pointer-show');
  });
}

onLoadDisable();
boxElem.addEventListener('mousemove', onMouseMove, false);
boxElem.addEventListener('mouseleave', disablePointer, false);


