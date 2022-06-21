'use strict';

import {
  ANSWERS_OPTION_ID,
  ANSWERS_OPTION_RADIO_BUTTON_ID,
} from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('answer');
  element.id = `${ANSWERS_OPTION_ID}_${key}`;
  element.innerHTML = String.raw`
    <span class="key">${key.toUpperCase()}</span> 
    <input type="radio" id="${ANSWERS_OPTION_RADIO_BUTTON_ID}_${key}" name="answer" value="${key}">
    ${answerText};
  `;
  return element;
};
