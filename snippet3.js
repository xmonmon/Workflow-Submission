var securityQuestions = [
    { question: "What was the name of your first pet?", expectedAnswer: "Kristy"},
    { question: "Who was your favorite teacher in Middle School?", expectedAnswer: "Ms. Kydd"},
    { question: "Where were you born?", expectedAnswer: "Washington Hospital"},
    ]
for (var i = 0 ; i < securityQuestions.length ; i++) {
var  userInput = prompt(securityQuestions[i].question);
     if (userInput !== securityQuestions[i].expectedAnswer){
         alert ( "WRONG" );
         break;
     }   
}
