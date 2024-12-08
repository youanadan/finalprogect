(function () {
    emailjs.init("LcsYjrDLDTEtUMjkw");
})();

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const people = document.getElementById('people').value;
    const email = document.getElementById('email').value;

    
    if (!destination || !startDate || !endDate || !people) {
        alert('Please fill in all fields.');
        return;
    }

    
    if (new Date(startDate) >= new Date(endDate)) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    
    const confirmationDetails = `
        <strong>Destination:</strong> ${destination} <br>
        <strong>Check-in Date:</strong> ${startDate} <br>
        <strong>Check-out Date:</strong> ${endDate} <br>
        <strong>Number of People:</strong> ${people} <br>
        <strong>Email:</strong> ${email}
    `;
    document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
    document.getElementById('confirmation').classList.remove('hidden');
   
    const emailData = {

        destination: destination,
        startDate: startDate,
        endDate: endDate,
        people: people, 
        to_email: email,
    };


    emailjs.send("service_ctl7g8b", "template_9i4x547", emailData)
    .then(function (response) {
        console.log("Email sent successfully", response);
        alert("A confirmation email has been sent!");
    }, function (error) {
        console.error("Failed to send email", error);
        alert("There was an issue sending the confirmation email.");
    });

    document.getElementById('bookingForm').reset();
});