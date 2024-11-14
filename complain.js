// Function to get current location and fill in the location field
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            document.getElementById('location').value = lat + ', ' + lng;
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Set timestamp before form submission
document.getElementById('complainForm').addEventListener('submit', function() {
    let date = new Date();
    document.getElementById('timestamp').value = date.toISOString();
});
