document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;

    const selectedDonor = JSON.parse(localStorage.getItem("selectedDonor"));

    if (!selectedDonor) {
        alert("No donor selected. Please go back and select a donor.");
        return;
    }

    const bookingConfirmation = `
        <h3>Congratulations! Your slot has been booked at HYDERABAD BLOOD BANK.</h3>
        <p>Please be on time for the appointment at the given location.</p>
        <p>Call us at phone number: 9874516324 for further details.</p>
        <h4>Appointment Details:</h4>
        <p>Date: ${appointmentDate}</p>
        <p>Time: ${appointmentTime}</p>
        <p>Donor Name: ${selectedDonor.name}</p>
        <p>Donor Email: ${selectedDonor.email}</p>
        <p>Donor Blood Type: ${selectedDonor.bloodType}</p>
        <p>Location: <a href="https://maps.app.goo.gl/GLHsAA6Y23n3EjdM8" target="_blank">HYDERABAD BLOOD BANK</a></p>
    `;

    document.getElementById("bookingConfirmation").innerHTML = bookingConfirmation;

    const donorNotification = `
        <h3>Notification for Donor:</h3>
        <p>There is a slot booked for donation for ${selectedDonor.name} at ${appointmentDate} ${appointmentTime} at HYDERABAD BLOOD BANK.</p>
    `;

    let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.push(donorNotification);
    localStorage.setItem('notifications', JSON.stringify(notifications));

    console.log(donorNotification);
});
