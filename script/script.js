const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = []
let accumulativeCalculation


function calculate(button) {
    const value = button.textContent;
    if (value === 'CLEAR') {
        calculation = []
        let screen = document.querySelector('.screen')
        screen.classList.remove('bug')
        screenDisplay.textContent = '.'
    } else if (value === '=') {
        screenDisplay.textContent = eval(accumulativeCalculation)
        let screen = document.querySelector('.screen')
        screen.classList.remove('bug')
    } else if (calculation.length > 9){
        console.log('hi! I am only 10digit screen, and your int was not in my plans')
        // let screen = document.querySelector('.screen')
        // screen.classList.add('bug')
          } else {
        let screen = document.querySelector('.screen')
        screen.classList.remove('bug')
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

// VanillaTilt.init(document.querySelector(".calculator"), {
//     transition:             true,
//     max: 15,
//     speed: 400,
//     glare: true,
//     "max-glare": 0.2,
//     gyroscope:              true,   // Boolean to enable/disable device orientation detection,
//     gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
//     gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
//     gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
//     gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
// });
