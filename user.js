document.getElementById("availabilityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const bloodType = document.getElementById("bloodType").value;
    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    const matchingDonors = donors.filter(donor => donor.bloodType === bloodType);

    const availableDonors = document.getElementById("availableDonors");
    availableDonors.innerHTML = "<h3>Available Donors:</h3>";

    if (matchingDonors.length > 0) {
        matchingDonors.forEach((donor, index) => {
            const donorDetails = document.createElement("div");
            donorDetails.innerHTML = `
                <p>Donor ${index + 1}</p>
                <p>Name: ${donor.name}</p>
                <p>Email: ${donor.email}</p>
                <p>Blood Type: ${donor.bloodType}</p>
                <p>Last Donation Date: ${donor.lastDonationDate}</p>
                <p>First-time Donor: ${donor.firstTimeDonor ? "Yes" : "No"}</p>
                <button onclick="proceedToBook(${index})">Proceed to Book</button>
            `;
            availableDonors.appendChild(donorDetails);
        });
    } else {
        availableDonors.innerHTML += "<p>No donors available with the selected blood type.</p>";
    }
});

function proceedToBook(donorIndex) {
    const donors = JSON.parse(localStorage.getItem("donors")) || [];
    const selectedDonor = donors[donorIndex];
    localStorage.setItem("selectedDonor", JSON.stringify(selectedDonor));
    window.location.href = "booking.html";
}
