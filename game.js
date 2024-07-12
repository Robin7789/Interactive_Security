document
  .getElementById("testPasswordBtn")
  .addEventListener("click", function () {
    const password = document.getElementById("password").value;
    const score = calculatePasswordScore(password);
    const adjective = getAdjective(score);
    const timeToHack = calculateTimeToHack(password);

    document.getElementById("score").textContent = `Score: ${score}/100`;
    document.getElementById(
      "adjective"
    ).textContent = `Niveau de sécurité: ${adjective}`;
    document.getElementById(
      "timeToHack"
    ).textContent = `Temps estimé pour pirater: ${timeToHack}`;
  });

function calculatePasswordScore(password) {
  let score = 0;
  if (password.length >= 20) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[a-z]/.test(password)) score += 20;
  if (/[0-9]/.test(password)) score += 20;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;
  return score;
}

function getAdjective(score) {
  if (score <= 20) return "Très faible";
  if (score <= 40) return "Faible";
  if (score <= 60) return "Moyen";
  if (score <= 80) return "Fort";
  return "Très fort";
}

function calculateTimeToHack(password) {
  const length = password.length;
  const seconds = Math.pow(2, length) / 1000;

  if (seconds < 60) return "Quelques secondes";
  if (seconds < 3600) return "Quelques minutes";
  if (seconds < 86400) return "Quelques heures";
  if (seconds < 2592000) return "Quelques jours";
  if (seconds < 31536000) return "Quelques mois";
  return "Plusieurs années";
}
