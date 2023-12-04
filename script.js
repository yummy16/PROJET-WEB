(function showResults(){
     
  //recupérer les éléments
    const quizForm = document.getElementById('quiz-form');

    quizForm.addEventListener('submit', function(event) {

      const QuestContainers = document.querySelectorAll('.question-item');
      let numCorrect = 0;

      QuestContainers.forEach((QuestContainer, questionNumber) => {

        const selector = `input[name=answer-${questionNumber + 1}]:checked`;
        const userAnswer = (QuestContainer.querySelector(selector) || {}).value;
        const correctAnswer = "true";

        //conditions

        if(userAnswer === correctAnswer){
          numCorrect++;
          QuestContainer.style.color = 'green';
        }
        else {
          QuestContainer.style.color = 'red';
        }
          // si les 3 éléments sont corrects
        if (numCorrect === 3){
          document.getElementById("alert").style.display = 'block';
        }
      });

      event.preventDefault();
      showResults();
    });
  })();
