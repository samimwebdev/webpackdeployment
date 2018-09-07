import small from './img/small.jpg';
import large from './img/big.jpg';
export const lodeSmallImage = () => {
  const smallImg = document.createElement('img');
  smallImg.src = small;
  document.body.appendChild(smallImg);
}
export const lodeLargeImage = () => {
  const largeImg = document.createElement('img');
  largeImg.src = large;
  document.body.appendChild(largeImg);
}
