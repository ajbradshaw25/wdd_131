// Global variable to keep track of the number of participants
let participantCount = 1;

// --- Template Functions ---

/**
 * Creates the HTML string for a new participant section.
 * @param {number} count The participant number (2, 3, 4, etc.).
 * @returns {string} The HTML string for the new section.
 */
function participantTemplate(count) {
    // The HTML template uses template literals to easily insert the unique 'count' number.
    return `
    <section class="participant${count}" id="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}">First Name</label>
            <input type="text" id="fname${count}" name="fname${count}" value="" required>
        </div>
        <div class="item">
            <label for="lname${count}">Last Name</label>
            <input type="text" id="lname${count}" name="lname${count}" value="" required>
        </div>
        <div class="item">
            <label for="age${count}">Age</label>
            <input type="number" id="age${count}" name="age${count}" value="" required>
        </div>
        <div class="item">
            <label for="fee${count}">Fee</label>
            <input type="number" id="fee${count}" name="fee${count}" value="100" required>
        </div>
        <div class="item">
            <label for="grade${count}">Grade</label>
            <select name="grade${count}" id="grade${count}">
                <option value="" selected disabled>Select Grade</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
            </select>
        </div>
    </section>
    `;
}

/**
 * Creates the HTML string for the success message.
 * @param {object} info An object with adultName, participants, and feeTotal.
 * @returns {string} The success message HTML.
 */
function successTemplate(info) {
    return `
    <p>
        Thank you **${info.adultName}** for registering. You have registered **${info.participants}** participants and owe **$${info.feeTotal}** in Fees.
    </p>
    `;
}

// --- Add Participant Functionality (02 & 03) ---

/**
 * Handles the logic for adding a new participant section.
 */
function addParticipant() {
    // 1. Add one to the count
    participantCount++;

    // 2. Create a copy of the HTML with unique IDs
    const newParticipantHTML = participantTemplate(participantCount);

    // 3. Find the 'Add Participant' button
    const addButton = document.getElementById('add');

    // 4. Insert the new HTML before the add button
    // This places the new participant after the last one and before the button.
    addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
}

// Attach the event listener to the 'Add Participant' button
document.getElementById('add').addEventListener('click', addParticipant);

// --- Submit Form Functionality (04 & 05) ---

/**
 * Calculates the total fees from all fee input elements.
 * @returns {number} The sum of all fees.
 */
function totalFees() {
    // Selects any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");

    // Convert the NodeList to an Array using the spread operator
    feeElements = [...feeElements];

    // Use Array.reduce() to sum up the fees
    const total = feeElements.reduce((sum, element) => {
        // Convert the input value (string) to a number for calculation
        // The fee inputs are assumed to be a number type.
        const fee = parseFloat(element.value) || 0; // Use 0 if conversion fails
        return sum + fee;
    }, 0); // Start the sum at 0

    return total;
}

/**
 * Handles the form submission event, calculates fees, and displays a summary.
 * @param {Event} event The submit event object.
 */
function submitForm(event) {
    // 1. Keep the form from doing what it normally would (reloading the page)
    event.preventDefault();

    // 2. Calculate the total fees
    const totalFee = totalFees();

    // 3. Get the adult name and number of participants
    const adultName = document.getElementById('adult_name').value;
    // participantCount is already accurate from the addParticipant function

    // 4. Prepare the info object for the template
    const info = {
        adultName: adultName,
        participants: participantCount,
        feeTotal: totalFee.toFixed(2) // Format to two decimal places
    };

    // 5. Generate the success message
    const successMessage = successTemplate(info);

    // 6. Hide the Form and show the summary element
    const formElement = document.forms[0];
    const summaryElement = document.getElementById('summary');

    // Hide the form
    formElement.classList.add('hide'); // Assumes you have a .hide { display: none; } class in your CSS

    // Insert the success message into the summary element
    summaryElement.innerHTML = successMessage;

    // Show the summary
    summaryElement.classList.remove('hide'); // Assumes summary is hidden by default
}

// Attach the event listener to the form for a 'submit' event
document.forms[0].addEventListener('submit', submitForm);