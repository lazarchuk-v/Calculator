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
    } else if (calculation.length > 10){
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

VanillaTilt.init(document.querySelector(".calculator"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});
