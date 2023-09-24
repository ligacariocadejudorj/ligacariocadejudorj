const targetTime = new Date('2023-10-08T09:00:00').getTime();

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = Math.max(0, targetTime - currentTime);

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Torneio começa em: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining === 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
