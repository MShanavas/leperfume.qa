// Party popper (confetti) effect
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Trigger confetti on page load
window.onload = function() {
    launchConfetti();
    setInterval(launchConfetti, 3000); // Repeats every 3 seconds
};
