import Logo from './images/logo.jpg'

export default function showHome() {
  const contentDiv = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('content-wrapper');
  
  const panucciLogo = new Image();
  panucciLogo.src = Logo; 
  panucciLogo.classList.add('logo');

  homeDiv.appendChild(panucciLogo);
  contentDiv.appendChild(homeDiv);
}