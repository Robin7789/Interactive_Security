document.addEventListener("DOMContentLoaded", function () {
  // les 20 questions
  const questionObjects = [
    {
      question: "Qu'est-ce qu'un pare-feu ?",
      reponse: [
        "Un logiciel de protection",
        "Un matériel de réseau",
        "Un antivirus",
        "Un type de malware",
      ],
      correct: [0, 1],
    },
    {
      question: "Qu'est-ce qu'un virus informatique ?",
      reponse: [
        "Un programme malveillant",
        "Un logiciel de sécurité",
        "Un outil de gestion de réseau",
        "Un type de matériel",
      ],
      correct: [0],
    },
    // Ajoutez ici les autres questions
  ];

  // les variables
  let actuelQuestionIndex = 0;
  let scoreTotal = 0;

  const question = document.getElementById("element");
  const score = document.getElementById("score");
  const manche = document.getElementById("manche");
  const formulaire = document.getElementById("formulaire");
  const resultatSection = document.getElementById("result-section");
  const finalScore = document.getElementById("final-score");
  const restartBtn = document.getElementById("restart-btn");
  const confirmBtn = document.getElementById("confirm-btn");

  // le quizz
  function quizzSecurity(questionIndex) {
    const questionObject = questionObjects[questionIndex];
    question.textContent = questionObject.question;
    const reponsesHTML = questionObject.reponse
      .map((reponse, index) => {
        return `<label><input type="checkbox" name="choix" value="${index}"/> ${reponse}</label><br/>`;
      })
      .join("");
    document.getElementById("options").innerHTML = reponsesHTML;
  }

  // Vérification des réponses
  function checkAnswers() {
    const selectedCheckboxes = document.querySelectorAll(
      'input[name="choix"]:checked'
    );
    const selectedValues = Array.from(selectedCheckboxes).map((checkbox) =>
      parseInt(checkbox.value)
    );
    const correctAnswers = questionObjects[actuelQuestionIndex].correct;

    const isCorrect =
      correctAnswers.length === selectedValues.length &&
      correctAnswers.every((val) => selectedValues.includes(val));
    return isCorrect;
  }

  // Gestionnaire d'événement pour le bouton Confirmer
  confirmBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (checkAnswers()) {
      scoreTotal += 10;
    }
    actuelQuestionIndex++;
    if (actuelQuestionIndex < questionObjects.length) {
      quizzSecurity(actuelQuestionIndex);
      score.textContent = scoreTotal;
      manche.textContent = actuelQuestionIndex + 1;
    } else {
      document.getElementById("quiz-section").style.display = "none";
      resultatSection.style.display = "block";
      finalScore.textContent = scoreTotal;
    }
  });

  // Gestionnaire d'événement pour le bouton Recommencer
  restartBtn.addEventListener("click", function () {
    scoreTotal = 0;
    actuelQuestionIndex = 0;
    score.textContent = scoreTotal;
    manche.textContent = actuelQuestionIndex + 1;
    document.getElementById("quiz-section").style.display = "block";
    resultatSection.style.display = "none";
    quizzSecurity(actuelQuestionIndex);
  });

  // page par défaut
  quizzSecurity(actuelQuestionIndex);
  score.textContent = scoreTotal;
  manche.textContent = actuelQuestionIndex + 1;
});
