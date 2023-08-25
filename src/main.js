import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// Button hover effect
const hoverButtons = () => {
    const buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        const differenceBox = button.querySelector('.difference-box');
        differenceBox.classList.remove('btn-hover');
      });

      button.addEventListener('mouseleave', () => {
        const differenceBox = button.querySelector('.difference-box');
        differenceBox.classList.add('btn-hover');
      });
    });
  };
  
hoverButtons();