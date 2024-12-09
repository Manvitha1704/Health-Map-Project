document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    var formMessages = document.getElementById("form-messages");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const planInput = document.getElementById('plan').value.toLowerCase();

        let planDetails = '';

        switch (planInput) {
            case 'health':
                planDetails = {
                    name: 'Health Insurance Plan',
                    details: 'Comprehensive coverage including hospitalization, outpatient care, and prescription drugs.',
                    premium: 'Rs:1,00,150',
                    deductible: 'Rs:40,000',
                    copayment: '20%'
                };
                break;
            case 'auto':
                planDetails = {
                    name: 'Auto Insurance Plan',
                    details: 'Coverage for liability, collision, and comprehensive damages.',
                    premium: 'Rs:66,000',
                    deductible: 'Rs:25,000',
                    rentalCarCoverage: 'Included'
                };
                break;
            case 'life':
                planDetails = {
                    name: 'Life Insurance Plan',
                    details: 'Financial protection for your family in case of your unexpected death.',
                    premium: 'Rs:40,000',
                    deathBenefit: 'Rs:8,346,165',
                    policyTerm: '20 years'
                };
                break;
            default:
                alert('Please enter a valid plan: health, auto, or life.');
                return;
        }

        // Save plan details to local storage
        localStorage.setItem('selectedPlan', JSON.stringify(planDetails));

        // Display thank you message
        formMessages.textContent = "Thank you for contacting us! We will get back to you soon.";

        // Optionally, clear the form fields after submission
        form.reset();

        // Navigate to plan details page
        window.location.href = 'plandetails.html';
    });
});
