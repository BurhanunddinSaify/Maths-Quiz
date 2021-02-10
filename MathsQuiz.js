const q = document.getElementById('ques')
const qNum = document.getElementById('q-number')
const options = document.getElementsByClassName('options')
const AnsRev = document.getElementById('correct-answer')
const score = document.getElementById('score')
const timer = document.getElementById('timer')
const result = document.getElementById('result')

var correctanswer = 0

MakeQuestions = () => {
    let random1 = Math.floor(Math.random() * 100)
    let random2 = Math.floor(Math.random() * 1000)
    let number1 = Math.floor(Math.random() * random1) + random2
    let number2 = Math.floor(Math.random() * random1) + random2
    let number3 = Math.floor(Math.random() * random1) + random2
    let question = `${number1} + ${number2} + ${number3}`
    q.innerHTML = question
    correctanswer = eval(question)
    console.log(correctanswer)
    for(let i = 0; i < options.length; i++){
        options[i].setAttribute('value', correctanswer - Math.floor(Math.random() * 100))
    }
    function CorrectAnswer () {
        let CorrectOption = Math.floor(Math.random() * (4 - 0) + 0);
        options[CorrectOption].setAttribute('value', correctanswer) } 
        CorrectAnswer()
    result.classList.toggle('correct')
    result.classList.toggle('incorrect')
        AnsRev.innerHTML = ''
    qNum.innerHTML++
    return correctanswer
}
SelectAnswer = (id) => {
    if(options[id].value == correctanswer){
        console.log('Correct')
        score.innerHTML ++
        
        result.innerHTML = 'Correct'
        
    }else{
        if(score.innerHTML != 0 ){
            score.innerHTML --
        }
        MakeQuestions()
        result.innerHTML = "Wrong"
        CheckQuestion()
    }
} 

CheckQuestion = () => {
    console.log(eval(q.innerHTML))
    var correctanswer = eval(q.innerHTML)
    AnsRev.innerHTML = correctanswer
    setTimeout(() => { 
        if(score.innerHTML != 0){
                score.innerHTML -- 
        }  ;
        MakeQuestions()},800)
}
Restart = () => {
    score.innerHTML = 0
    qNum.innerHTML = 0
    q.innerHTML = 'Question will be presented here!!'
    MakeQuestions()
    result.innerHTML = ''
    }

document.getElementById('start-button').addEventListener('click',Restart)
