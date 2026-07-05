// Elements
const form = document.getElementById("ticketForm");
const type = document.getElementById("type");
const eventDate = document.getElementById("eventDate");

const extraField = document.getElementById("extraField");
const extraLabel = document.getElementById("extraLabel");
const extraInput = document.getElementById("extraInput");

const errors = document.getElementById("errors");
const ticketOutput = document.getElementById("ticketOutput");

// Set minimum date to tomorrow
const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

eventDate.min = tomorrow.toISOString().split("T")[0];

// Show / Hide Student or Guest field
type.addEventListener("change", () => {

    extraInput.value = "";

    if (type.value === "student") {

        extraField.classList.remove("hidden");
        extraLabel.textContent = "Student I#";
        extraInput.placeholder = "123456789";

    }

    else if (type.value === "guest") {

        extraField.classList.remove("hidden");
        extraLabel.textContent = "Access Code";
        extraInput.placeholder = "EVENT131";

    }

    else {

        extraField.classList.add("hidden");

    }

});

// Submit Form
form.addEventListener("submit", function (e) {

    e.preventDefault();

    errors.innerHTML = "";
    ticketOutput.style.display = "none";

    let message = "";

    // Date Validation
    const selectedDate = new Date(eventDate.value);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {

        message = "Event date must be after today.";

    }

    // Student Validation
    if (type.value === "student") {

        const regex = /^[0-9]{9}$/;

        if (!regex.test(extraInput.value)) {

            message = "Student I# must be 9 digits";

        }

    }

    // Guest Validation
    if (type.value === "guest") {

        if (extraInput.value.trim() !== "EVENT131") {

            message = "Access Code must be EVENT131";

        }

    }

    // Display Error
    if (message !== "") {

        errors.textContent = message;
        return;

    }

    // Create Ticket
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    ticketOutput.innerHTML = `
        <h2>Ticket Created</h2>

        <p>${firstName} ${lastName}</p>

        <p>${type.value}</p>

        <p>${eventDate.value}</p>
    `;

    ticketOutput.style.display = "block";

    errors.innerHTML = "";

    form.reset();

    extraField.classList.add("hidden");

});