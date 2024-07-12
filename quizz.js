document.addEventListener("DOMContentLoaded", function () {
  // les 20 questions
  const questionObjects = [
    {
      question: "Qu'est-ce qu'un keylogger ?",
      reponse: [
        "Un logiciel de cryptage",
        "Un programme qui enregistre les frappes au clavier",
        "Un type de pare-feu",
        "Un outil de sécurité",
      ],
      correct: [1, 2],
    },
    {
      question: "Qu'est-ce qu'un virus informatique ?",
      reponse: [
        "Un type de matériel",
        "Un programme malveillant",
        "Un outil de gestion de réseau",
        "Un logiciel de sécurité",
      ],
      correct: [1],
    },
    {
      question: "Qu'est-ce que le phishing ?",
      reponse: [
        "Une technique de pêche",
        "Une attaque visant à obtenir des informations sensibles",
        "Un type de malware",
        "Un logiciel de protection",
      ],
      correct: [1, 2],
    },
    {
      question: "Qu'est-ce qu'un cheval de Troie ?",
      reponse: [
        "Un outil de diagnostic réseau",
        "Un programme qui semble légitime mais exécute des actions malveillantes",
        "Un type de pare-feu",
        "Un logiciel de protection",
      ],
      correct: [1],
    },
    {
      question: "Qu'est-ce qu'un botnet ?",
      reponse: [
        "Un réseau d'ordinateurs infectés contrôlés à distance",
        "Un outil de protection",
        "Un type de pare-feu",
        "Un logiciel de cryptage",
      ],
      correct: [0, 2],
    },
    {
      question: "Qu'est-ce qu'un rootkit ?",
      reponse: [
        "Un logiciel malveillant permettant un accès privilégié à un ordinateur",
        "Un outil de cryptage",
        "Un type de pare-feu",
        "Un logiciel antivirus",
      ],
      correct: [0],
    },
    {
      question: "Qu'est-ce que l'ingénierie sociale ?",
      reponse: [
        "Manipuler les gens pour obtenir des informations confidentielles",
        "Un type de malware",
        "Un logiciel de protection",
        "Une technique de cryptage",
      ],
      correct: [0],
    },
    {
      question: "Quel est le rôle d'un IDS (Intrusion Detection System) ?",
      reponse: [
        "Détecter les tentatives d'intrusion",
        "Crypter les données",
        "Bloquer les intrusions",
        "Sauvegarder les données",
      ],
      correct: [0, 2],
    },
    {
      question: "Qu'est-ce que l'authentification biométrique ?",
      reponse: [
        "L'utilisation de caractéristiques physiques pour vérifier l'identité",
        "Un mot de passe sécurisé",
        "Un type de malware",
        "Un outil de cryptage",
      ],
      correct: [0, 1],
    },
    {
      question: "Quel est le but d'une attaque par déni de service (DDoS) ?",
      reponse: [
        "Voler des données",
        "Installer un virus",
        "Crypter les données",
        "Surcharger un serveur pour le rendre inaccessible",
      ],
      correct: [3, 1],
    },
    {
      question: "Qu'est-ce qu'un réseau privé virtuel (VPN) ?",
      reponse: [
        "Un type de malware",
        "Un service qui crypte la connexion internet",
        "Un logiciel antivirus",
        "Un outil de phishing",
      ],
      correct: [1],
    },
    {
      question: "Qu'est-ce que l'hameçonnage par SMS ou 'smishing' ?",
      reponse: [
        "Une tentative de fraude utilisant des messages SMS",
        "Un type de malware",
        "Un outil de sauvegarde",
        "Un logiciel de cryptage",
      ],
      correct: [0],
    },
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
      question: "Qu'est-ce qu'un logiciel antivirus ?",
      reponse: [
        "Un programme qui détecte et élimine les logiciels malveillants",
        "Un outil de sauvegarde",
        "Un programme de gestion des utilisateurs",
        "Un type de pare-feu",
      ],
      correct: [0, 2],
    },
    {
      question: "Qu'est-ce que le cryptage des données ?",
      reponse: [
        "La transformation des données en code illisible sans clé",
        "La suppression des données sensibles",
        "La copie des données",
        "La sauvegarde des données",
      ],
      correct: [0],
    },
    {
      question: "Quel est le but d'une attaque par déni de service (DDoS) ?",
      reponse: [
        "Surcharger un serveur pour le rendre inaccessible",
        "Voler des données",
        "Installer un virus",
        "Crypter les données",
      ],
      correct: [0, 2],
    },
    {
      question: "Qu'est-ce que le spam ?",
      reponse: [
        "L'envoi massif de messages non sollicités",
        "Un type de virus",
        "Un outil de sécurité",
        "Un type de cryptage",
      ],
      correct: [0, 1],
    },
    {
      question: "Quel est l'objectif d'un ransomware ?",
      reponse: [
        "Chiffrer les données de la victime et demander une rançon",
        "Voler des données",
        "Surveiller les activités de l'utilisateur",
        "Supprimer des fichiers",
      ],
      correct: [0, 1],
    },
    {
      question: "Qu'est-ce qu'une vulnérabilité zéro-day ?",
      reponse: [
        "Une faille de sécurité inconnue et non corrigée",
        "Un type de virus",
        "Un outil de sauvegarde",
        "Un logiciel de cryptage",
      ],
      correct: [0],
    },
    {
      question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
      reponse: [
        "Une méthode de protection utilisant deux formes de vérification",
        "Un type de virus",
        "Un outil de sauvegarde",
        "Une technique de cryptage",
      ],
      correct: [0, 3],
    },
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

  // verif des réponses
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

  // bouton confirmer
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

  // bouton recommencer
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
