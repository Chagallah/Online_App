	// Get the form element
	const form = document.querySelector("form");

	// Add an event listener to the submit button
	form.addEventListener("submit", (event) => {

	    // Prevent the default action from happening
	    event.preventDefault();

	    // Check if all the fields are filled in
	    if (form.querySelector("select[name='history_of_fever']").value === "" ||
	        form.querySelector("select[name='body_temperature']").value === "" ||
	        form.querySelector("select[name='coughing']").value === "" ||
	        form.querySelector("select[name='onset_of_symptoms']").value === "" ||
	        form.querySelector("select[name='hospitalized']").value === "" ||
	        form.querySelector("input[name='date']").value === "") {

	        // Tell the user to fill in the details
	        alert("Please fill in all the details before submitting.");

	        // Return false to prevent the form from submitting
	        return false;
	    }

	    // Show an alert after submitting
	    alert("Your form has been submitted successfully!");
	});





	// Get the form element
	const form = document.querySelector("form");

	// Add an event listener to the submit button
	form.addEventListener("submit", (event) => {

	    // Prevent the default action from happening
	    event.preventDefault();

	    // Check if all the fields are filled in
	    if (form.querySelector("input[name='patient_id']").value === "" ||
	        form.querySelector("input[name='hospital_id']").value === "" ||
	        form.querySelector("input[name='interview_date']").value === "") {

	        // Tell the user to fill in the details
	        alert("Please fill in all the details before submitting.");

	        // Return false to prevent the form from submitting
	        return false;
	    }

	    // Get the values of the form fields
	    const patientId = form.querySelector("input[name='patient_id']").value;
	    const hospitalId = form.querySelector("input[name='hospital_id']").value;
	    const interviewDate = form.querySelector("input[name='interview_date']").value;

	    // Check if the interview type is SARI surveillance
	    let interviewType = "SARI surveillance";
	    if (form.querySelector("input[name='interview_type'][value='Outbreak']").checked) {
	        interviewType = "Outbreak";
	    } else if (form.querySelector("input[name='interview_type'][value='ILI surveillance']").checked) {
	        interviewType = "ILI surveillance";
	    }

	    // Display the details
	    alert(` Patient ID: ${patientId}Hospital ID: ${hospitalId}Interview date: ${interviewDate}Interview type: ${interviewType} `);
	});






	// This function will check if all the required fields are filled in
	function checkRequiredFields() {
	    // Get all the required fields
	    var requiredFields = document.querySelectorAll("input[required]");

	    // Loop through the required fields and check if they are all filled in
	    for (var i = 0; i < requiredFields.length; i++) {
	        if (requiredFields[i].value == "") {
	            // If a required field is not filled in, show an error message
	            alert("Please fill in all the required fields.");
	            return false;
	        }
	    }

	    // If all the required fields are filled in, return true
	    return true;
	}

	// This function will submit the form data to the server
	function submitForm() {
	    // Check if all the required fields are filled in
	    if (!checkRequiredFields()) {
	        return;
	    }

	    // Get the form data
	    var formData = new FormData(document.getElementById("form"));

	    // Submit the form data to the server
	    var xhr = new XMLHttpRequest();
	    xhr.open("POST", "/submit");
	    xhr.onload = function() {
	        if (xhr.status == 200) {
	            // If the request was successful, show a success message
	            alert("Your form has been submitted successfully.");
	        } else {
	            // If the request was not successful, show an error message
	            alert("There was an error submitting your form.");
	        }
	    };
	    xhr.send(formData);
	}



	// Get the form element
	var form = document.querySelector('form');

	// Attach a submit event listener to the form
	form.addEventListener('submit', function(event) {
	    // Prevent the form from submitting
	    event.preventDefault();

	    // Get the values entered in the input fields
	    var onsetDate = document.getElementById('onset-date').value;
	    var admissionDate = document.getElementById('admission-date').value;
	    var outpatientDate = document.getElementById('outpatient-date').value;

	    // Get the values of the selected radio buttons
	    var wheezing = document.querySelector('input[name="wheezing"]:checked');
	    var soreThroat = document.querySelector('input[name="sore-throat"]:checked');
	    var difficultyBreathing = document.querySelector('input[name="difficulty-in-breathing"]:checked');
	    var rhinorrhea = document.querySelector('input[name="rhinorrhea"]:checked');
	    var chestPain = document.querySelector('input[name="chest-pain"]:checked');
	    var diarrhea = document.querySelector('input[name="diarrhea"]:checked');
	    var vomiting = document.querySelector('input[name="vomiting"]:checked');
	    var muscleAches = document.querySelector('input[name="muscles-aches"]:checked');
	    var chills = document.querySelector('input[name="chills"]:checked');
	    var appetite = document.querySelector('input[name="appetite"]:checked');
	    var convulsions = document.querySelector('input[name="convulsions"]:checked');

	    // Check if any required fields are empty
	    if (!onsetDate || !admissionDate || !outpatientDate ||
	        !wheezing || !soreThroat || !difficultyBreathing ||
	        !rhinorrhea || !chestPain || !diarrhea ||
	        !vomiting || !muscleAches || !chills ||
	        !appetite || !convulsions) {
	        alert('Please fill in all the required fields before moving to the next page.');
	    } else {
	        // All required fields are filled, proceed to the next page

	        // Get the values of the selected radio buttons (values are stored in the "value" attribute)
	        wheezing = wheezing.value;
	        soreThroat = soreThroat.value;
	        difficultyBreathing = difficultyBreathing.value;
	        rhinorrhea = rhinorrhea.value;
	        chestPain = chestPain.value;
	        diarrhea = diarrhea.value;
	        vomiting = vomiting.value;
	        muscleAches = muscleAches.value;
	        chills = chills.value;
	        appetite = appetite.value;
	        convulsions = convulsions.value;

	        // Display the captured details in an alert
	        var message = 'Details:\n' +
	            'Date of onset of current illness: ' + onsetDate + '\n' +
	            'Date of hospital admission: ' + admissionDate + '\n' +
	            'Date seen in out-patient: ' + outpatientDate + '\n' +
	            'Wheezing: ' + wheezing + '\n' +
	            'Sore throat: ' + soreThroat + '\n' +
	            'Difficulty in breathing: ' + difficultyBreathing + '\n' +
	            'Rhinorrhea: ' + rhinorrhea + '\n' +
	            'Chest pain: ' + chestPain + '\n' +
	            'Diarrhea: ' + diarrhea + '\n' +
	            'Vomiting: ' + vomiting + '\n' +
	            'Muscle aches: ' + muscleAches + '\n' +
	            'Chills: ' + chills + '\n' +
	            'Lack of appetite/refusal to feed: ' + appetite + '\n' +
	            'Convulsions: ' + convulsions;

	        alert(message);

	        // Replace 'next-page.html' with the URL of your next page
	        window.location.href = 'next-page.html';
	    }
	});




	// This function will check if all the required fields are filled in
	function checkRequiredFields() {
	    // Get all the required fields
	    var requiredFields = document.querySelectorAll("input[required]");

	    // Loop through the required fields and check if they are all filled in
	    for (var i = 0; i < requiredFields.length; i++) {
	        if (requiredFields[i].value == "") {
	            // If a required field is not filled in, show an error message
	            alert("Please fill in all the required fields.");
	            return false;
	        }
	    }

	    // If all the required fields are filled in, return true
	    return true;
	}

	// This function will submit the form data to the server
	function submitForm() {
	    // Check if all the required fields are filled in
	    if (!checkRequiredFields()) {
	        return;
	    }

	    // Get the form data
	    var formData = new FormData(document.getElementById("form"));

	    // Submit the form data to the server
	    var xhr = new XMLHttpRequest();
	    xhr.open("POST", "/submit");
	    xhr.onload = function() {
	        if (xhr.status == 200) {
	            // If the request was successful, show a success message
	            alert("Your form has been submitted successfully.");
	        } else {
	            // If the request was not successful, show an error message
	            alert("There was an error submitting your form.");
	        }
	    };
	    xhr.send(formData);
	}

	// This function will show a message to the user to fill in all the required fields before moving to the next page
	function showFillInRequiredFieldsMessage() {
	    alert("Please fill in all the required fields before moving to the next page.");
	}

	// This function will show a message to the user that the form has been submitted successfully
	function showSubmittedSuccessfullyMessage() {
	    alert("Your form has been submitted successfully.");
	}

	// When the page loads, add event listeners to the submit button and the next page button
	document.addEventListener("DOMContentLoaded", function() {
	    // Add an event listener to the submit button
	    document.getElementById("submit-button").addEventListener("click", submitForm);

	    // Add an event listener to the next page button
	    document.getElementById("next-page-button").addEventListener("click", function() {
	        // Check if all the required fields are filled in
	        if (!checkRequiredFields()) {
	            // If not, show a message to the user to fill in the required fields
	            showFillInRequiredFieldsMessage();
	            return;
	        }

	        // Otherwise, submit the form
	        submitForm();
	    });
	});






	// Get the form element
	const form = document.querySelector('.tab');

	// Add submit event listener to the form
	form.addEventListener('submit', function(event) {
	    // Check if any required fields are not filled
	    let isFormValid = true;

	    // Get all the radio input elements
	    const radioInputs = form.querySelectorAll('input[type="radio"]');

	    radioInputs.forEach(function(input) {
	        const groupName = input.getAttribute('name');
	        const isChecked = form.querySelector(`input[name="${groupName}"]:checked`);

	        if (!isChecked) {
	            isFormValid = false;
	        }
	    });

	    // Prevent form submission if any required fields are not filled
	    if (!isFormValid) {
	        event.preventDefault();
	        alert('Please fill in all the required fields.');
	    } else {
	        // Display alert after successful form submission
	        alert('Form submitted successfully!');
	    }
	});




	// Get the form element
	const form = document.querySelector('.tab');

	// Add submit event listener to the form
	form.addEventListener('submit', function(event) {
	    // Check if any required fields are not filled
	    let isFormValid = true;

	    // Get the temperature input and radio buttons
	    const temperatureInput = form.querySelector('input[name="temperature"]');
	    const temperatureRadios = form.querySelectorAll('input[name="temperature"]:checked');

	    // Validate the temperature input and radio buttons
	    if (!temperatureInput.value || temperatureRadios.length === 0) {
	        isFormValid = false;
	    }

	    // Get the respiratory rate input
	    const respiratoryRateInput = form.querySelector('input[name="rate"]');

	    // Validate the respiratory rate input
	    if (!respiratoryRateInput.value) {
	        isFormValid = false;
	    }

	    // Get the oxygen saturation input and radio buttons
	    const oxygenSaturationInput = form.querySelector('input[name="oxygen"]');
	    const oxygenRadios = form.querySelectorAll('input[name="oxygen"]:checked');

	    // Validate the oxygen saturation input and radio buttons
	    if (!oxygenSaturationInput.value || oxygenRadios.length === 0) {
	        isFormValid = false;
	    }

	    // Prevent form submission if any required fields are not filled
	    if (!isFormValid) {
	        event.preventDefault();
	        alert('Please fill in all the required fields.');
	    } else {
	        // Display alert after successful form submission
	        alert('Form submitted successfully!');
	    }
	});



	// Get the form element
	const form = document.querySelector('.tab');

	// Add submit event listener to the form
	form.addEventListener('submit', function(event) {
	    // Check if any required fields are not filled
	    let isFormValid = true;

	    // Get the ICU admission radio buttons
	    const icuAdmissionRadios = form.querySelectorAll('input[name="hasBeenAdmittedToICU"]:checked');

	    // Validate the ICU admission radio buttons
	    if (icuAdmissionRadios.length === 0) {
	        isFormValid = false;
	    }

	    // Get the mechanical ventilation radio buttons
	    const mechanicalVentilationRadios = form.querySelectorAll('input[name="hasReceivedMechanicalVentilation"]:checked');

	    // Validate the mechanical ventilation radio buttons
	    if (mechanicalVentilationRadios.length === 0) {
	        isFormValid = false;
	    }

	    // Prevent form submission if any required fields are not filled
	    if (!isFormValid) {
	        event.preventDefault();
	        alert('Please fill in all the required fields.');
	    } else {
	        // Display alert after successful form submission
	        alert('Form submitted successfully!');
	    }
	});




	// Function to show/hide the vaccination answer based on the selected radio button
	function showVaccinationAnswer(inputName, selectedValue) {
	    const inputElement = document.querySelector(`input[name="${inputName}"][value="${selectedValue}"]`);
	    const vaccinationAnswer = inputElement.parentNode.parentNode.nextElementSibling;

	    if (selectedValue === 'Yes') {
	        vaccinationAnswer.style.display = 'block';
	    } else {
	        vaccinationAnswer.style.display = 'none';
	    }
	}

	// Get the form element
	const form = document.querySelector('.tab');

	// Add submit event listener to the form
	form.addEventListener('submit', function(event) {
	    // Check if any required fields are not filled
	    let isFormValid = true;

	    // Get the COVID-19 vaccination radio buttons
	    const covid19VaccinationRadios = form.querySelectorAll('input[name="covid19Verified"]:checked');

	    // Validate the COVID-19 vaccination radio buttons
	    if (covid19VaccinationRadios.length === 0) {
	        isFormValid = false;
	    } else if (covid19VaccinationRadios[0].value === 'Yes') {
	        // If COVID-19 vaccination is selected, validate the number of doses
	        const covid19DosesInput = document.getElementById('covid19Doses');
	        if (covid19DosesInput.value === '' || parseInt(covid19DosesInput.value) < 0 || parseInt(covid19DosesInput.value) > 3) {
	            isFormValid = false;
	        }
	    }

	    // Get the COVID-19 test radio buttons
	    const covid19TestRadios = form.querySelectorAll('input[name="covid19Tested"]:checked');

	    // Validate the COVID-19 test radio buttons
	    if (covid19TestRadios.length === 0) {
	        isFormValid = false;
	    } else if (covid19TestRadios[0].value === 'Yes') {
	        // If COVID-19 test is selected, validate the test result
	        const covid19TestResultRadios = form.querySelectorAll('input[name="covid19TestResult"]:checked');
	        if (covid19TestResultRadios.length === 0) {
	            isFormValid = false;
	        }
	    }

	    // Prevent form submission if any required fields are not filled
	    if (!isFormValid) {
	        event.preventDefault();
	        alert('Please fill in all the required fields correctly.');
	    } else {
	        // Display alert after successful form submission
	        alert('Form submitted successfully!');
	    }
	});





	function validateForm() {
	    var isValid = true;
	    var errorMessage = "Please fill in the following fields:\n";

	    // Check if temperature is selected
	    var temperature = document.getElementsByName("temperature");
	    var temperatureSelected = false;
	    for (var i = 0; i < temperature.length; i++) {
	        if (temperature[i].checked) {
	            temperatureSelected = true;
	            break;
	        }
	    }
	    if (!temperatureSelected) {
	        errorMessage += "- Temperature\n";
	        isValid = false;
	    }

	    // Check if respiratory rate is filled
	    var respiratoryRate = document.getElementById("rate").value;
	    if (respiratoryRate === "") {
	        errorMessage += "- Respiratory rate\n";
	        isValid = false;
	    }

	    // Check if oxygen saturation is filled
	    var oxygenSaturation = document.getElementById("oxygen").value;
	    if (oxygenSaturation === "") {
	        errorMessage += "- Oxygen saturation\n";
	        isValid = false;
	    }

	    // Check if at least one oxygen option is selected
	    var oxygenOptions = document.getElementsByName("oxygen");
	    var oxygenOptionSelected = false;
	    for (var i = 0; i < oxygenOptions.length; i++) {
	        if (oxygenOptions[i].checked) {
	            oxygenOptionSelected = true;
	            break;
	        }
	    }
	    if (!oxygenOptionSelected) {
	        errorMessage += "- Oxygen option\n";
	        isValid = false;
	    }

	    // Check if ICU admission option is selected
	    var hasBeenAdmittedToICU = document.getElementById("hasBeenAdmittedToICU");
	    if (!hasBeenAdmittedToICU.checked) {
	        errorMessage += "- ICU admission\n";
	        isValid = false;
	    }

	    // Check if mechanical ventilation option is selected
	    var hasReceivedMechanicalVentilation = document.getElementById("hasReceivedMechanicalVentilation");
	    if (!hasReceivedMechanicalVentilation.checked) {
	        errorMessage += "- Mechanical ventilation\n";
	        isValid = false;
	    }

	    // Check if at least one influenza vaccination option is selected
	    var influenzaVaccinationOptions = document.getElementsByName("covid19Verified");
	    var influenzaVaccinationOptionSelected = false;
	    for (var i = 0; i < influenzaVaccinationOptions.length; i++) {
	        if (influenzaVaccinationOptions[i].checked) {
	            influenzaVaccinationOptionSelected = true;
	            break;
	        }
	    }
	    if (!influenzaVaccinationOptionSelected) {
	        errorMessage += "- Influenza vaccination\n";
	        isValid = false;
	    }

	    // Check if COVID-19 doses is within the valid range
	    var covid19Doses = document.getElementById("covid19Doses").value;
	    if (covid19Doses < 0 || covid19Doses > 3) {
	        errorMessage += "- COVID-19 doses (should be between 0 and 3)\n";
	        isValid = false;
	    }

	    // Check if at least one COVID-19 verification option is selected
	    var covid19VerificationOptions = document.getElementsByName("covid19Verified");
	    var covid19VerificationOptionSelected = false;
	    for (var i = 0; i < covid19VerificationOptions.length; i++) {
	        if (covid19VerificationOptions[i].checked) {
	            covid19VerificationOptionSelected = true;
	            break;
	        }
	    }
	    if (!covid19VerificationOptionSelected) {
	        errorMessage += "- COVID-19 verification\n";
	        isValid = false;
	    }

	    // Check if at least one COVID-19 testing option is selected
	    var covid19TestingOptions = document.getElementsByName("covid19Tested");
	    var covid19TestingOptionSelected = false;
	    for (var i = 0; i < covid19TestingOptions.length; i++) {
	        if (covid19TestingOptions[i].checked) {
	            covid19TestingOptionSelected = true;
	            break;
	        }
	    }
	    if (!covid19TestingOptionSelected) {
	        errorMessage += "- COVID-19 testing\n";
	        isValid = false;
	    }

	    // Check if at least one COVID-19 test result option is selected
	    var covid19TestResultOptions = document.getElementsByName("covid19TestResult");
	    var covid19TestResultOptionSelected = false;
	    for (var i = 0; i < covid19TestResultOptions.length; i++) {
	        if (covid19TestResultOptions[i].checked) {
	            covid19TestResultOptionSelected = true;
	            break;
	        }
	    }
	    if (!covid19TestResultOptionSelected) {
	        errorMessage += "- COVID-19 test result\n";
	        isValid = false;
	    }

	    // Check if influenza testing option is selected
	    var influenzaTesting = document.getElementsByName("influenza_testing");
	    var influenzaTestingSelected = false;
	    for (var i = 0; i < influenzaTesting.length; i++) {
	        if (influenzaTesting[i].checked) {
	            influenzaTestingSelected = true;
	            break;
	        }
	    }
	    if (!influenzaTestingSelected) {
	        errorMessage += "- Influenza testing\n";
	        isValid = false;
	    }

	    // Check if at least one swab type is selected
	    var swabTypes = document.getElementsByName("swab_type");
	    var swabTypeSelected = false;
	    for (var i = 0; i < swabTypes.length; i++) {
	        if (swabTypes[i].checked) {
	            swabTypeSelected = true;
	            break;
	        }
	    }
	    if (!swabTypeSelected) {
	        errorMessage += "- Swab type\n";
	        isValid = false;
	    }

	    // Check if specimen collection date is filled
	    var specimenCollectionDate = document.getElementsByName("specimen_collection_date")[0].value;
	    if (specimenCollectionDate === "") {
	        errorMessage += "- Specimen collection date\n";
	        isValid = false;
	    }

	    if (!isValid) {
	        alert(errorMessage);
	    }

	    return isValid;
	}

	var currentTab = 0; // Current tab is set to be the first tab (0)
	showTab(currentTab); // Display the current tab

	function showTab(n) {
	    // This function will display the specified tab of the form...
	    var x = document.getElementsByClassName("tab");
	    x[n].style.display = "block";
	    //... and fix the Previous/Next buttons:
	    if (n == 0) {
	        document.getElementById("prevBtn").style.display = "none";
	    } else {
	        document.getElementById("prevBtn").style.display = "inline";
	    }
	    if (n == (x.length - 1)) {
	        document.getElementById("nextBtn").innerHTML = "Submit";
	    } else {
	        document.getElementById("nextBtn").innerHTML = "Next";
	    }


	}

	function nextPrev(n) {
	    // This function will figure out which tab to display
	    var x = document.getElementsByClassName("tab");
	    // Exit the function if any field in the current tab is invalid:
	    if (n == 1 && !validateForm()) return false;
	    // Hide the current tab:
	    x[currentTab].style.display = "none";
	    // Increase or decrease the current tab by 1:
	    currentTab = currentTab + n;
	    // if you have reached the end of the form...
	    if (currentTab >= x.length) {
	        // ... the form gets submitted:
	        document.getElementById("regForm").submit();
	        return false;
	    }
	    // Otherwise, display the correct tab:
	    showTab(currentTab);
	}

	function validateForm() {
	    // This function deals with validation of the form fields
	    var x, y, i, valid = true;
	    x = document.getElementsByClassName("tab");
	    y = x[currentTab].getElementsByTagName("input");
	    // A loop that checks every input field in the current tab:
	    for (i = 0; i < y.length; i++) {
	        // If a field is empty...
	        if (y[i].value == "") {
	            // add an "invalid" class to the field:
	            y[i].className += " invalid";
	            // and set the current valid status to false
	            valid = false;
	        }
	    }
	    // If the valid status is true, mark the step as finished and valid:
	    if (valid) {
	        document.getElementsByClassName("step")[currentTab].className += " finish";
	    }
	    return valid; // return the valid status
	}

	function myFunction1() {
	    var element = document.body;
	    element.classList.toggle("dark-mode");
	}