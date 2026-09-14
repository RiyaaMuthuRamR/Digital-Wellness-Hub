// ---------------- FAMILY CHALLENGES ----------------

const challenges = [
  "📵 No Screens During Meals",
  "📚 Read Together for 20 Minutes",
  "🌳 Play Outside for 30 Minutes",
  "🎨 Make Something Creative Together",
  "💬 Family Conversation Without Phones",
  "🌙 No Screens One Hour Before Bed",
  "🚶 Family Walk for 20 Minutes",
  "🎵 Dance Together for 15 Minutes",
  "🧩 Play a Board Game Together",
  "🌈 Family Hug Challenge"
];

function newChallenge() {
  const random = Math.floor(Math.random() * challenges.length);
  document.getElementById("challengeText").innerHTML = challenges[random];
}

// ---------------- FAMILY QUOTES ----------------

const quotes = [
  "💚 The best childhood memories happen away from screens.",
  "🌈 Play together today, scroll less today.",
  "📖 A bedtime story lasts longer than a bedtime video.",
  "❤️ Healthy digital habits begin with healthy family habits.",
  "🌻 Every screen-free moment is a beautiful family memory.",
  "☀️ Balance technology with love, laughter and play.",
  "😊 Happy families spend time together, not just online.",
  "🌙 Better sleep starts with a screen-free bedtime."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").innerHTML = quotes[random];
}

// Show one quote when page loads
window.onload = function () {
  newQuote();
};

// ---------------- COUNTER ----------------

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = Number(counter.dataset.target);
  let value = 0;

  const updateCounter = () => {
    value += target / 80;

    if (value < target) {
      counter.innerText = Math.ceil(value);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});