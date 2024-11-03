document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questionsContainer');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${q.question}</p>`;

        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');

        q.options.forEach((option, i) => {
            const optionItem = document.createElement('li');
            optionItem.innerHTML = `
                <label>
                    <input type="checkbox" name="question${index}" value="${i}" data-correct="${option.correct}">
                    ${option.text}
                </label>
            `;
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        questionsContainer.appendChild(questionDiv);
    });
});

function submitQuiz() {
    const submitButton = document.querySelector("button[type='button']");
    
    // Désactiver la fonction de soumission après le premier clic
    submitButton.disabled = true;

    let score = 0;

    questions.forEach((q, index) => {
        const selectedOptions = document.querySelectorAll(`input[name="question${index}"]:checked`);
        const allOptions = document.querySelectorAll(`input[name="question${index}"]`);
        
        // Vérifie si toutes les réponses correctes sont cochées et aucune mauvaise réponse n'est cochée
        const isCorrect = Array.from(allOptions).every(input => 
            (input.checked && input.getAttribute('data-correct') === "true") ||
            (!input.checked && input.getAttribute('data-correct') === "false")
        );

        if (isCorrect) {
            score += 1;
        }

        // Parcours de chaque option pour afficher le résultat directement à côté
        q.options.forEach((option, i) => {
            const optionElement = allOptions[i];
            const label = optionElement.parentNode;

            if (option.correct) {
                if (optionElement.checked) {
                    // Bonne réponse sélectionnée
                    label.style.color = "green";
                    label.innerHTML += " ✅";
                } else {
                    // Bonne réponse non sélectionnée
                    label.style.color = "orange";
                    label.innerHTML += " (Correct)";
                }
            } else {
                if (optionElement.checked) {
                    // Mauvaise réponse sélectionnée
                    label.style.color = "red";
                    label.innerHTML += " ❌";
                }
            }
        });
    });

    // Affiche le score et le message de performance
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<p><strong>Votre score : ${score} / ${questions.length}</strong></p>`;
    if (score >= 68) {
        resultContainer.innerHTML += "<p>Félicitations ! Vous avez réussi le quiz avec un excellent score ! 🎉</p>";
    } else if (score >= 56) {
        resultContainer.innerHTML += "<p>Pas loin ! Vous avez presque réussi. Un petit effort supplémentaire et vous y arriverez ! 👍</p>";
    } else {
        resultContainer.innerHTML += "<p>Ne vous découragez pas ! Réessayez le quiz pour améliorer votre score. 💪</p>";
    }

    // Changer le texte et la fonction du bouton en "Relancer le quiz"
    submitButton.innerText = "Relancer le quiz";
    submitButton.disabled = false; // Réactiver le bouton pour le rechargement
    submitButton.onclick = () => location.reload(); // Relance le quiz en rechargeant la page
}





