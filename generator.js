document.addEventListener("DOMContentLoaded", function () {
  let mdp = document.getElementById("geeks");

  function generateP() {
    let length = document.getElementById("length").value;
    let includeUppercase = document.getElementById("uppercase").checked;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "@#$%&*?";

    let allChars = "";
    if (includeUppercase) allChars += uppercase;
    if (includeLowercase) allChars += lowercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    if (allChars === "") {
      alert(
        "Veuillez sélectionner au moins une option pour générer le mot de passe."
      );
      return "";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * allChars.length);
      pass += allChars.charAt(char);
    }

    return pass;
  }

  function gfg_Run() {
    mdp.innerHTML = generateP();
  }

  document.getElementById("generate").addEventListener("click", function () {
    gfg_Run();
  });
});
