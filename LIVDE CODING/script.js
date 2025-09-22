const codesCompetences = ["C1", "C3", "C2", "C1", "C8", "C1", "C3", "C2"];

// تعريف مصفوفة تحتوي على codes de compétences.

const codeRecherche = prompt("Quel code de compétence voulez-vous compter ?");  

//إدخال الرمز الذي يريد حساب عدد مرات تكراره

let compteur = 0;

//تخزين عدد التكرارات

for (let code of codesCompetences) {
  if (code === codeRecherche) {
    compteur++;
  }
}

// حلقة تمر على جميع عناصر المصفوفة إذا كان العنصر يطابق الرمز المُدخل، يتم زيادة العدّاد بمقدار 1

console.log(`Le code "${codeRecherche}" apparaît ${compteur} fois.`);
 
// يتم طباعة النتيجة في console