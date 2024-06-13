import './style.css';
import showHome from './home.js';

showHome();
switchTabs();

function switchTabs() {
  const buttons = document.querySelectorAll('button');
  const contentDiv = document.querySelector('#content');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        contentDiv.textContent = '';
        buttonEvents(e);
    });
  });
}

function buttonEvents(e){
  const homeButton = document.querySelector('#home-button');
  const menuButton = document.querySelector('#menu-button');
  const aboutButton = document.querySelector('#about-button');

  homeButton.classList.remove('clicked-button');
  menuButton.classList.remove('clicked-button');
  aboutButton.classList.remove('clicked-button');
  
  if(e.target.value === 'home'){
    homeButton.classList.add('clicked-button');
    showHome();
  } else if(e.target.value === 'menu') {
    menuButton.classList.add('clicked-button');
  } else if(e.target.value === 'about') {
    aboutButton.classList.add('clicked-button'); 
  }
}





