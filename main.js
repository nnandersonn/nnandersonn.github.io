console.log('js connected')

const summaryButton = document.getElementById('summary-button')
const experienceButton = document.getElementById('experience-button')
const educationButton = document.getElementById('education-button')
const aboutMeArea = document.getElementById('about-me-area')

summaryButton.addEventListener('click', ()=>underlineButton(summaryButton))
experienceButton.addEventListener('click', ()=>underlineButton(experienceButton))
educationButton.addEventListener('click', ()=>underlineButton(educationButton))

window.onload(underlineButton(summaryButton))

function underlineButton(button){
    summaryButton.style.textDecoration = 'none'
    experienceButton.style.textDecoration = 'none'
    educationButton.style.textDecoration = 'none'
    
    button.style.textDecoration = 'underline'
    displayAboutMe(button)
}

function displayAboutMe(button){
    if(button.id == 'summary-button'){
        aboutMeArea.innerHTML = "My name is Nick and I am a software developer. It has been a round about journey for me to end up here, but I have finally found my calling. I have a B.S. in Chemistry and have job experience ranging from health inspecting to being a field engineer in construction. Working as a developer lets me use my analyitical and problem solving skills that were honed through college to solve everday problems. <br><br>  When not in front of a computer I can usually be found walking my dog, Bunsen, doing house projects, or chilling with my wife, Katy. I live in the great city of Spokane in Washington which providees us easy access to the outdoors which we take advantage of with hikes, being on the water, cross country skiing, and more."
    } else if(button.id == 'experience-button'){
        aboutMeArea.innerHTML = "Prior to being a developer I spent time as a chemist, health inspector, permit technician, and a field engineer. Now "
    } else if(button.id == 'education-button'){
        aboutMeArea.innerHTML = "My education details go here..."
    }
    

}
