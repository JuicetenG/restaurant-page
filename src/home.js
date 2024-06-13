import Logo from './images/logo.jpg'

export default function() {
  const contentDiv = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('logo-wrapper');
  
  const panucciLogo = new Image();
  panucciLogo.src = Logo; 
  panucciLogo.classList.add('logo');

  homeDiv.appendChild(panucciLogo);
  contentDiv.appendChild(homeDiv);
}