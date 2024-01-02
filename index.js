document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const birthdateInput = document.getElementById("birthdate");
        const birthdate = new Date(birthdateInput.value);
        const now = new Date();

        let ageYears = now.getFullYear() - birthdate.getFullYear();
        let ageMonths = now.getMonth() - birthdate.getMonth();
        let ageDays = now.getDate() - birthdate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Get last day of birth month
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        resultDiv.innerText = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
    });
});