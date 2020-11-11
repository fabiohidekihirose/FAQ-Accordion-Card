function handleToggle(buttonClass, answerNumber) {
    let answer = document.querySelector(`.${answerNumber}`)
    let question = document.querySelector(`.${buttonClass}`)
    let arrowImg = document.querySelector(`.${buttonClass} img`)
    let allAnswers = document.querySelectorAll('p')
    let allQuestions = document.querySelectorAll('button')
    for(let i = 0; i < allAnswers.length; i++) {
        if(allAnswers[i].style.display == 'block' && allAnswers[i].className != answerNumber) {
            document.querySelector(`p.${allAnswers[i].className}`).style.display = 'none'
            arrowImg.style.transform = 'rotate(0deg)'
            let closingQuestion = document.querySelector(`button.${allQuestions[i].className}`)
            closingQuestion.innerHTML = `${closingQuestion.textContent} ${arrowImg.outerHTML}`
        }
    }
    if(answer.style.display == 'none' || answer.style.display == false) {
        arrowImg.style.transform = 'rotate(180deg)'
        answer.style.display = 'block'
        question.innerHTML = `<strong>${question.textContent}</strong> ${arrowImg.outerHTML}`
    } else {
        answer.style.display = 'none'
        arrowImg.style.transform = 'rotate(0deg)'
        question.innerHTML = `${question.textContent} ${arrowImg.outerHTML}`
    }
}