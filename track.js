let currentStep = 1;

function updateProgress() {
    // Mark current step as completed
    document.getElementById(`step${currentStep}`).classList.add('completed');

    // Move to the next step if available
    currentStep++;
    if (currentStep <= 4) {
        document.getElementById(`step${currentStep}`).classList.add('active');
    }
}

// Initialize the first step as active on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('step1').classList.add('active');
});
