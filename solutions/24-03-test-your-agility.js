/* eslint-disable */

let pushed = false; 
let targetInt; 
const spinningElem = document.getElementById('spinning'); 
document.getElementById('buttonPressed').addEventListener('click', buttonPressed);

function buttonPressed() {
  pushed = true;
}

function setTargetInt() {
  const targetElem = document.getElementById('targetNum');
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}


const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const spin = async () => {
  
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
  
};


function stop(i) {
  
  const stoppedAt = parseInt(spinningElem.innerText);
  const delta = Math.abs(targetInt - stoppedAt);
  const result = document.getElementById('result');  
  if (delta === 0) {
    result.innerText = 'Hooray Merry JavaScriptmass, you won!';
  } else {
    result.innerText = `You are off by ${delta}, please try again`;
  }
}

setTargetInt();
spin();
