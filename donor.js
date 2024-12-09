document.getElementById("donorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bloodType = document.getElementById("bloodType").value;
    const lastDonationDate = document.getElementById("lastDonationDate").value;
    const firstTimeDonor = document.getElementById("firstTimeDonor").checked;

    const newDonor = {
        name,
        email,
        bloodType,
        lastDonationDate,
        firstTimeDonor
    };

    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(newDonor);
    localStorage.setItem("donors", JSON.stringify(donors));

    displayDonorDetails();
});

function displayDonorDetails() {
    const donors = JSON.parse(localStorage.getItem("donors")) || [];
    const donorDetails = document.getElementById("donorDetails");

    donorDetails.innerHTML = "<h3>Registered Donors:</h3>";
    donors.forEach((donor, index) => {
        donorDetails.innerHTML += `
            <div>
                <p>Donor ${index + 1}</p>
                <p>Name: ${donor.name}</p>
                <p>Email: ${donor.email}</p>
                <p>Blood Type: ${donor.bloodType}</p>
                <p>Last Donation Date: ${donor.lastDonationDate}</p>
                <p>First-time Donor: ${donor.firstTimeDonor ? "Yes" : "No"}</p>
            </div>
        `;
    });

    displayDonorNotifications();
}

function displayDonorNotifications() {
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const donorNotifications = document.getElementById("donorNotifications");

    donorNotifications.innerHTML = "<h3>Donor Notifications:</h3>";
    notifications.forEach((notification, index) => {
        donorNotifications.innerHTML += `
            <div>
                <p>Notification ${index + 1}</p>
                <p>${notification}</p>
                <p>Location: <a href="https://maps.app.goo.gl/GLHsAA6Y23n3EjdM8" target="_blank">HYDERABAD BLOOD BANK</a></p>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", displayDonorDetails);
