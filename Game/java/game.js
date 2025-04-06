const songs = [
  {
    image: "download.jpg", 
    answer: "gundul gundul pacul"
  },
  {
    image: "gambar2.jpg",
    answer: "Yamko Rambe Yamko"
  },
  {
    image: "gambar3.jpg",
    answer: "Soleram"
  }
];

let current = 0;

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = songs[current].answer.toLowerCase();

  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Benar!";
    current++;
    if (current < songs.length) {
      setTimeout(() => {
        loadNext();
      }, 1000);
    } else {
      feedback.textContent = "Selamat! Kamu sudah menebak semua lagu!";
    }
  } else {
    feedback.textContent = "Salah. Coba lagi!";
  }
}

function loadNext() {
  document.getElementById("songImage").src = songs[current].image;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").textContent = "";
}