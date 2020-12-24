// HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS
/* eslint-disable */

// globals
let pushed = false; // Has the stop button been pushed - false is default
let targetInt; // The target number to stop the wheel on
const spinningElem = document.getElementById('spinning'); // The spinning number

// event listener
document.getElementById('buttonPressed').addEventListener('click', buttonPressed);

// When the stop button is pushed
function buttonPressed() {
  pushed = true;
}

// set the target Int
function setTargetInt() {
  const targetElem = document.getElementById('targetNum');
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}

// sleep const
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// EDIT THIS FUNCTION
const spin = async () => {
  // WRITE YOUR CODE HERE
  let counter = 0;
  while (counter < 101) {
    if (pushed === true) {
      stop(counter);
      break;
    } else {
      spinningElem.innerText = counter;
      await sleep(75);
    }
    if (counter === 100) {
      counter = 0;
    }
    counter += 1;
  }
  // Trigger this function when the STOP button has been pushed
  // Paste this wherever you need to sleep the incrimentor
};

// EDIT THIS FUNCTION
function stop(i) {
  // WRITE YOUR CODE HERE
  const stoppedAt = parseInt(spinningElem.innerText);
  const delta = Math.abs(targetInt - stoppedAt);
  const result = document.getElementById('result'); // display your result message here
  if (delta === 0) {
    result.innerText = 'Hooray Merry JavaScriptmass, you won!';
  } else {
    result.innerText = `You are off by ${delta}, please try again`;
  }
}

// main
setTargetInt();
spin();
