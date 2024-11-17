<script>
    document.getElementById('ticketBookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const fromStation = document.getElementById('fromStation').value;
        const toStation = document.getElementById('toStation').value;
        const date = document.getElementById('date').value;
        const travelClass = document.getElementById('class').value;
        const seats = document.getElementById('seats').value;

        // Store data in localStorage (or send it to a server)
        localStorage.setItem('ticketDetails', JSON.stringify({
            name,
            email,
            fromStation,
            toStation,
            date,
            travelClass,
            seats
        }));

        // Redirect to the payment page
        window.location.href = "payment.html";
    });
</script>
