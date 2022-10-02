const question = document.querySelectorAll('.question')
const questionAfter = document.querySelectorAll('.question::after')
console.log(questionAfter);
console.log(question);
const answer = document.querySelectorAll('.answer')
console.log(answer);

for(let i = 0; i< question.length;i++){
    question[i].addEventListener('click',()=>{
        question[i].classList.toggle('clicked')
        if(question[i].classList.contains('clicked')){
            question[i].style.fontSize="18px"
            answer[i].style.height="125px"
        }
        else{
            answer[i].style.height="0px"
            question[i].style.fontSize="22px"

        }
    })
}