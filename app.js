function generateForm() {
    let numSubjects = document.getElementById("numSubjects").value;
    let form = document.getElementById("subjectsForm");
    form.innerHTML = ""; // Clear existing form fields

    for (let i = 1; i <= numSubjects; i++) {
        let div = document.createElement("div");

        div.innerHTML = `
            <label>Subject ${i} Grade Points: </label>
            <input type="number" class="grade" min="0" max="10" required>
            <label> Credit Hours: </label>
            <input type="number" class="credit" min="1" required>
        `;

        form.appendChild(div);
    }
}

function calculateSGPA() {
    let grades = document.querySelectorAll(".grade");
    let credits = document.querySelectorAll(".credit");

    let totalGradePoints = 0, totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        let credit = parseFloat(credits[i].value);

        if (isNaN(grade) || isNaN(credit)) {
            alert("Please enter valid numbers!");
            return;
        }

        totalGradePoints += grade * credit;
        totalCredits += credit;
    }

    if (totalCredits === 0) {
        document.getElementById("result").innerText = "Total credits cannot be zero!";
        return;
    }

    let sgpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
}
