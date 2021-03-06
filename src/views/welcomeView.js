'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.className = 'welcome-elements';
  element.innerHTML = String.raw`
    <img id = "welcome-img" src = "public/images/welcome-img.jpeg" alt="Netherlands flag"/>
    <h1>Test your language</h1>
  `;
  return element;
};
