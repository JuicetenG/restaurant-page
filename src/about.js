import Fry from './images/PIZZAGOINOUT.jpg';

export default function showAbout() {
  const contentDiv = document.querySelector('#content');
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('content-wrapper');

  const topText = document.createElement('div');
  const bottomText = document.createElement('div');
  topText.classList.add('fry-text');
  bottomText.classList.add('fry-text');

  topText.textContent = 'FRY! PIZZA GOIN\' OUT!';
  bottomText.textContent = 'COME ONNN!!!';

  const fry = new Image();
  fry.src = Fry;
  fry.classList.add('fry-image');

  aboutDiv.appendChild(topText);
  aboutDiv.appendChild(fry);
  aboutDiv.appendChild(bottomText);
  contentDiv.appendChild(aboutDiv);
}