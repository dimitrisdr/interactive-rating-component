// Variables

let form = document.querySelector('.form')
let result = document.querySelector('.rate-result');
let sections = document.querySelectorAll('.wraper section');
let submitBtn = document.querySelector('.submit-btn')
let formOptions = document.querySelectorAll('.rate-label')



// Functions

function handleSubmitBtn() {
    submitBtn.classList.remove('disabled')
}

function handleSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target));   
    result.innerText = formData.rating
    sections.forEach(sec => sec.classList.toggle('hidden'))
    
    // switching back for testing
    
    // setTimeout(()=>{
    //     sections.forEach(sec => sec.classList.toggle('hidden'))
    // }, 1000)
}



// Event Listeners

formOptions.forEach(opt => opt.addEventListener('click', handleSubmitBtn))
form.addEventListener('submit', handleSubmit)