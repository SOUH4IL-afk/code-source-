const formations = {
    "Introduction à Git": "C1",
    "Sécurité numérique de base": "C2",
    "Utiliser Google Docs": "C3",
    "Créer une présentation PowerPoint": "C4",    // يحتوي على أسماء formations
    "Gérer ses fichiers dans le cloud": "C5",
    "Utiliser un tableur": "C6",
    "Rédiger un mail professionnel": "C7",
    "Organiser un projet avec Trello": "C8"
  };

  let score = 0;     //عدد الإجابات الصحيحة
  let total = 0;     // عدد الأسئلة التي تم طرحها
  

  function poserQuestion() {    // هذه دالة اسمها "poser question " يتم استدعاؤها كل مرة لطرح سؤال جديد
  
    const nomsFormations = Object.keys(formations);
    const aleatoire = Math.floor(Math.random() * nomsFormations.length); // نختار رقم عشوائي من بين أرقام formation 
    const formationChoisie = nomsFormations[aleatoire];
    const bonneReponse = formations[formationChoisie];
  
    const reponse = prompt(`À quelle compétence correspond : "${formationChoisie}" ? (Ex: C1 à C8)`);
  
    if (reponse === null) {
      console.log("Jeu terminé.");
      console.log(`Score final : ${score}/${total}`);
      return;
    }
  
    total++;
  
    if (reponse.toUpperCase() === bonneReponse) {
      console.log("✅ Bonne réponse !");
      score++;
    } else {
      console.log(`❌ Mauvaise réponse. La bonne réponse était ${bonneReponse}.`);
    }
  
    console.log(`Score actuel : ${score}/${total}`);
    poserQuestion(); // Relance la prochaine question automatiquement
  }
  
  // Lancement du jeu
  console.log("Bienvenue dans le jeu des compétences numériques !");
  poserQuestion();
  