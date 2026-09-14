/* ==========================================
   DIGITAL WELLNESS HUB
   ACTIVITIES PAGE
========================================== */

/* ---------- Random Activity Generator ---------- */

const activities = [
  {
    title: "🏰 Build a Pillow Fort",
    image: "images/o1.jpg",
    description: "Use pillows and blankets to build a magical fort and tell stories together."
  },
  {
    title: "🎨 Rainbow Painting",
    image: "images/o2.jpg",
    description: "Create colorful rainbow art using crayons, paints or paper collage."
  },
  {
    title: "🌳 Nature Treasure Hunt",
    image: "images/o3.jpg",
    description: "Find leaves, flowers, stones and birds during a family nature walk."
  },
  {
    title: "🎵 Family Dance Party",
    image: "images/o4.jpg",
    description: "Play your favourite songs and dance together for 20 minutes."
  },
  {
    title: "🚴 Cycling Adventure",
    image: "images/o5.jpg",
    description: "Go cycling together and explore your neighbourhood safely."
  },
  {
    title: "🍕 Cook Together",
    image: "images/o2.jpg",
    description: "Prepare a simple healthy snack or fruit salad as a family."
  },
  {
    title: "📚 Storytelling Circle",
    image: "images/o1.jpg",
    description: "Everyone tells one funny or imaginative story."
  },
  {
    title: "🪴 Plant a Flower",
    image: "images/o3.jpg",
    description: "Plant seeds or water plants together and learn about nature."
  }
];

function generateActivity() {
  const random = Math.floor(Math.random() * activities.length);

  document.getElementById("activityTitle").innerHTML =
    activities[random].title;

  document.getElementById("activityDescription").innerHTML =
    activities[random].description;

  document.getElementById("activityImage").src =
    activities[random].image;

  document.getElementById("activityImage").classList.add("spin-image");

  setTimeout(() => {
    document.getElementById("activityImage").classList.remove("spin-image");
  }, 600);
}

/* ---------- 30 Minute Challenge ---------- */

const challenges = [
  "📚 Read a Story Together",
  "🌳 Play in the Park",
  "🎨 Draw Your Dream House",
  "🧩 Complete a Puzzle",
  "🎵 Dance for 30 Minutes",
  "🍪 Bake Cookies Together",
  "🚴 Ride a Bicycle",
  "🌈 Make Paper Crafts",
  "🎭 Perform a Puppet Show",
  "🪁 Fly a Kite Outside"
];

function newChallenge30() {
  const random = Math.floor(Math.random() * challenges.length);

  document.getElementById("challenge30").innerHTML =
    challenges[random];
}

/* ---------- Bingo Game ---------- */

const bingoCells = document.querySelectorAll(".bingo-cell");

window.addEventListener("DOMContentLoaded", () => {

  bingoCells.forEach((cell, index) => {

    const saved = localStorage.getItem("bingo" + index);

    if (saved === "true") {
      cell.classList.add("bingo-complete");
    }

    cell.addEventListener("click", () => {

      if (cell.classList.contains("center-cell")) return;

      cell.classList.toggle("bingo-complete");

      localStorage.setItem(
        "bingo" + index,
        cell.classList.contains("bingo-complete")
      );

      checkBingo();

    });

  });

  newFunFact();

});

/* ---------- Check Bingo Completion ---------- */

function checkBingo() {

  let completed = 0;

  bingoCells.forEach(cell => {
    if (cell.classList.contains("bingo-complete"))
      completed++;
  });

  if (completed >= 10) {
    launchCelebration();
    alert("🎉 Great Job! Family Bingo Champion!");
  }

}

/* ---------- Reset Bingo ---------- */

function resetBingo() {

  bingoCells.forEach((cell, index) => {

    cell.classList.remove("bingo-complete");

    localStorage.removeItem("bingo" + index);

  });

}

/* ---------- Family Fun Wheel ---------- */

const wheelActivities = [
  "🎨 Drawing Time",
  "📚 Story Time",
  "🚴 Cycling",
  "🌳 Nature Walk",
  "🍕 Cooking Together",
  "🎵 Dance Party",
  "🧩 Puzzle Challenge",
  "🪴 Gardening",
  "🎭 Puppet Show",
  "🏰 Pillow Fort"
];

function spinWheel() {

  const wheel = document.querySelector(".wheel-circle");

  wheel.style.animation = "none";
  void wheel.offsetWidth;

  wheel.style.animation = "spinWheel 2.5s ease";

  const random =
    Math.floor(Math.random() * wheelActivities.length);

  setTimeout(() => {

    document.getElementById("wheelResult").innerHTML =
      wheelActivities[random];

  }, 2200);

}

/* ---------- Fun Facts ---------- */

const funFacts = [
  "🌳 Outdoor play improves creativity and focus.",
  "📚 Reading together strengthens parent-child bonding.",
  "🎨 Creative play develops imagination.",
  "🎵 Dancing improves mood and fitness.",
  "❤️ Family conversations build confidence in children.",
  "🌈 Playing together creates lifelong memories.",
  "🍎 Screen-free meals improve communication.",
  "☀️ Sunshine helps children sleep better at night."
];

function newFunFact() {

  const random = Math.floor(Math.random() * funFacts.length);

  document.getElementById("funFact").innerHTML =
    funFacts[random];

}

/* ---------- Emoji Celebration ---------- */

function launchCelebration() {

  const emojis = ["🎉","🌈","⭐","🎈","💚","✨","🦋"];

  for(let i=0;i<25;i++){

    const emoji = document.createElement("div");

    emoji.className = "activity-emoji";

    emoji.innerHTML =
      emojis[Math.floor(Math.random()*emojis.length)];

    emoji.style.left = Math.random()*100 + "vw";

    emoji.style.fontSize =
      (18 + Math.random()*18) + "px";

    emoji.style.animationDuration =
      (3 + Math.random()*3) + "s";

    document.body.appendChild(emoji);

    setTimeout(()=>{
      emoji.remove();
    },6000);

  }

}

/* ---------- Auto Fun Fact Popup ---------- */

const popup = document.createElement("div");

popup.className = "badge-popup";

document.body.appendChild(popup);

function popupFact(){

  const random = Math.floor(Math.random()*funFacts.length);

  popup.innerHTML = funFacts[random];

  popup.classList.add("show-popup");

  setTimeout(()=>{
    popup.classList.remove("show-popup");
  },5000);

}

setTimeout(popupFact,4000);
setInterval(popupFact,25000);

console.log("🎨 Activities Page Loaded Successfully!");