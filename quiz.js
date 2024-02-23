// const questionObj = 
//     {
//       category: 'Food & Drink',
//       id: 'qa-1',
//       correctAnswer: 'Three',
//       answers: ['Two', 'Three ', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };

const quesJSON = [
  {
    correctAnswer: 'Three ',
    answers: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    answers: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    answers: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    answers: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    answers: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

    let score=0;
    let currentQ=0;
const questionEl=document.getElementById('question');
const optionDiv=document.getElementById('options');
const scoreDiv=document.getElementById('score');
const nextButton=document.getElementById('next');
showQ()
function showQ(){
const {correctAnswer,answers,question}=quesJSON[currentQ];
questionEl.textContent=question;
let shuffledAnswers=shuffleOptions(answers);
shuffledAnswers.forEach((option)=>{
const optButton=document.createElement('button');
optButton.textContent=option;  
optionDiv.appendChild(optButton);
optButton.addEventListener('click',function(){
  if(option===correctAnswer){
score++;
  }else{
    score-=0.25;
  }
  scoreDiv.textContent=`Score: ${score} / ${quesJSON.length}`;
  // const nextButtonDiv=document.createElement('div');
  // const nextButton=document.createElement('button');
  // nextButton.classList.add('next-button');
  // nextButton.textContent='NEXT';
  // nextButtonDiv.appendChild(nextButton);
  // scoreDiv.appendChild(nextButtonDiv);
  nextQ();
  nextButton.addEventListener('click',nextQ);
  
  
})

})
}

function nextQ(){
  // questionEl.textContent=quesJSON[currentQ].question;
  currentQ++;
  optionDiv.textContent='';
if(currentQ>=quesJSON.length){
  questionEl.textContent="Quiz Completed";
  optionDiv.textContent="";
  nextButton.remove();
}else{
  showQ();
}
}

function shuffleOptions(answers){
for(let i=answers.length-1;i>=0;i--){
  const j=Math.floor(Math.random()*i+1);
  [answers[i],answers[j]]=[answers[j],answers[i]];
}
return answers;
} 