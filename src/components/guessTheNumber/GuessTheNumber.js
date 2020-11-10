import { useEffect, useState } from 'react';
import './GuessTheNumber.scss';

const GuessTheNumber = props => {
  
  function guessNumber() {

    const random = Math.floor(Math.random() * 100) + 1;

    let number = parseInt(prompt('Guess a number from 1 to 100: '));

    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 100: '));
    }

    if(number == random) {
        console.log('You guessed the correct number.');
		break;
    }

  }

	guessNumber();
  
};

export default GuessTheNumber;
