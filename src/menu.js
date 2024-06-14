import Pizza from './images/pizza.jpg';

export default function showMenu() {
  const contentDiv = document.querySelector('#content');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('content-wrapper');

  const topText = document.createElement('div');
  const bottomText = document.createElement('div');
  topText.classList.add('top-text');
  bottomText.classList.add('bottom-text')

  topText.textContent = 'Cheese Pizza and a Large Soda';
  bottomText.textContent = '$10.77';

  const pizzaPic = new Image();
  pizzaPic.src = Pizza;
  pizzaPic.classList.add('pizza');

  menuDiv.appendChild(topText);
  menuDiv.appendChild(pizzaPic);
  menuDiv.appendChild(bottomText);
  contentDiv.appendChild(menuDiv);
}