const form = document.getElementById("quiz-form");
const items = document.getElementsByClassName("question-item");
const alert = document.getElementById("alert");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    for (const item of items) {
        const answer = item.querySelector("input:checked");

        if (answer) {
            score += answer.value === "true" ? 1 : 0;
            item.classList = `question-item ${answer.value === "true" ? "correct" : "incorrect"}`;
        }
    }

    alert.style.display = score === items.length ? "block" : "none";
});