function showDevelopments() {
    const developments = document.getElementById('developments');
    // Toggle the display of the developments section
    if (developments.style.display === 'none' || developments.style.display === '') {
        developments.style.display = 'flex';  // Show cards in flexbox layout
    } else {
        developments.style.display = 'none';  // Hide cards if already visible
    }
}
