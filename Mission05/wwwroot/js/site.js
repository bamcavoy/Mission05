$(document).ready(function () {

    function updateHourlyRate() {
        var selectedMethod = $("#coachingMethod").val();

        // Set different hourly rates based on coaching methods
        var hourlyRates = {
            "onTheCourse": 50.00,
            "recordedVideo": 25.00,
            "liveZoom": 35.00
        };

        // Update the displayed hourly rate and hours
        $("#hourlyRate").val(hourlyRates[selectedMethod].toFixed(2));
        $("#hours").val(selectedMethod === "recordedVideo" ? 1 : "").prop("readonly", selectedMethod === "recordedVideo");
    }

    // Initial update
    updateHourlyRate();

    // Event handler for coaching method change
    $("#coachingMethod").change(function () {
        updateHourlyRate();
    });

    $("#calculate").click(function () {
        // Get the input value and convert it to a number
        var hours = parseFloat($("#hours").val());

        // Check if the input is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Get the hourly rate
        var hourlyRate = parseFloat($("#hourlyRate").val());

        // Calculate the total
        var total = hours * hourlyRate;

        // Display the total in the output box
        $("#total").val(total.toFixed(2));
    });
});