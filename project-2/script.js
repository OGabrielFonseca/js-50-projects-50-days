const steps = document.querySelectorAll(".progress__step");
const progressLine = document.getElementById("progress-line");
console.log(steps.length)
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let activeStep = 1;

nextButton.addEventListener('click', () => {
    if (activeStep != steps.length) {
        prevButton.classList.remove('disabled');
        steps[activeStep].classList.add('active');
        progressLine.style.width = (33 * activeStep) + '%';
        activeStep++;    
        if (activeStep == steps.length) {
            nextButton.classList.add('disabled');
        }
    }       
})

prevButton.addEventListener('click', () => {
    if (activeStep != 1) {
        nextButton.classList.remove('disabled');
        activeStep--;   
        steps[activeStep].classList.remove('active');  
        progressLine.style.width = (33 * (activeStep - 1)) + '%';
        if (activeStep == 1) {
            prevButton.classList.add('disabled');
        } 
    }       
})