# Projects related to DOM

# Solution Code :

## Project 1 : CLOCK-

```javascript

const clock = document.getElementById('clock');
        setInterval( function() {
            let date = new Date();
            clock.innerHTML = date.toLocaleTimeString();
        }, 1000);

```

## Project 2 : BMI CALCULATOR-

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if(height === '' || height <= 0 || isNaN(height)){
      result.innerHTML = `Please give valid height ${height}`;
  }
  else if(weight === '' || weight <= 0 || isNaN(weight)){
      result.innerHTML = `Please give valid weight ${weight}`;
  }
  else{
      const bmi = (weight / ((height*height)/10000)).toFixed(2);
      result.innerHTML = `<span>${bmi}</span>`;
  }
})

```


## Project 3 : BG COLOR CHANGER -

```javascript

const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach( (btn) => {
  btn.addEventListener('mouseover', function(events){
    if(events.target.id === 'grey'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'white'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'blue'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'yellow'){
      body.style.backgroundColor = events.target.id
    }
    if(events.target.id === 'purple'){
      body.style.backgroundColor = events.target.id
    }
  })
})

```

## Project 4: Guess Number -

```javascript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


## Project 5: BGC CHANGER -

```javascript

const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hex[Math.ceil(Math.random() * 16)];
    }
    return color;
  }
  
  let intervalID;
  
  const  startChangingColor  = function(){
    function changeBGC(){
      document.body.style.backgroundColor = randomColor();
    }
    intervalID = setInterval(changeBGC, 1000);
  }
  
  const  stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
  }
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

## Project 6 : KEY EVENTS -

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
  </tr>
  <tr>
      <td>${e.key === ' ' ? 'space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
  </tr>
  </table>

  </div>
  `;
})

```