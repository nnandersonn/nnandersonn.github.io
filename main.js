console.log('js connected')

const summaryButton = document.getElementById('summary-button')
const experienceButton = document.getElementById('experience-button')
const educationButton = document.getElementById('education-button')

summaryButton.addEventListener('click', ()=>underlineButton(summaryButton))
experienceButton.addEventListener('click', ()=>underlineButton(experienceButton))
educationButton.addEventListener('click', ()=>underlineButton(educationButton))

function underlineButton(button){
    summaryButton.style.textDecoration = 'none'
    experienceButton.style.textDecoration = 'none'
    educationButton.style.textDecoration = 'none'
    console.log(summaryButton.textDecoration)

    button.style.textDecoration = 'underline'
    console.log(summaryButton.textDecoration)
}
