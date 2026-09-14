/* ==========================================
   DIGITAL WELLNESS HUB
   FAMILY HABIT TRACKER
========================================== */

const habitChecks = document.querySelectorAll(".habit-check");
const progressBar = document.getElementById("habitProgressBar");
const progressText = document.getElementById("progressText");
const streakCount = document.getElementById("streakCount");

const totalHabits = habitChecks.length;

// ---------- Load Saved Habits ----------

window.addEventListener("DOMContentLoaded", () => {

    habitChecks.forEach(check => {

        const key = check.dataset.habit;
        const saved = localStorage.getItem(key);

        if (saved === "true") {
            check.checked = true;
            check.parentElement.classList.add("habit-complete");
        }

    });

    updateProgress();
    loadStreak();
    newHabitQuote();

});

// ---------- Save Habit ----------

habitChecks.forEach(check => {

    check.addEventListener("change", () => {

        const key = check.dataset.habit;

        localStorage.setItem(key, check.checked);

        if (check.checked) {
            check.parentElement.classList.add("habit-complete");
        } else {
            check.parentElement.classList.remove("habit-complete");
        }

        updateProgress();

    });

});

// ---------- Update Progress ----------

function updateProgress() {

    let completed = 0;

    habitChecks.forEach(check => {
        if (check.checked) completed++;
    });

    const percent = Math.round((completed / totalHabits) * 100);

    progressBar.style.width = percent + "%";
    progressBar.innerHTML = percent + "%";

    progressText.innerHTML =
        completed + " / " + totalHabits + " Habits Completed";

    // Progress bar colors

    if (percent >= 80) {

        progressBar.style.background = "#35C759";

    } else if (percent >= 50) {

        progressBar.style.background = "#FFC107";

    } else {

        progressBar.style.background = "#FF5A5F";

    }

    unlockBadges(completed);

    // Increase streak if all completed

    if (completed === totalHabits) {
        increaseStreak();
        celebration();
    }

}

// ---------- Streak ----------

function loadStreak() {

    let streak = Number(localStorage.getItem("familyStreak")) || 0;
    streakCount.innerHTML = streak + " Days";

}

function increaseStreak() {

    const today = new Date().toLocaleDateString();

    const lastCompleted = localStorage.getItem("lastCompleted");

    if (lastCompleted !== today) {

        let streak = Number(localStorage.getItem("familyStreak")) || 0;

        streak++;

        localStorage.setItem("familyStreak", streak);
        localStorage.setItem("lastCompleted", today);

        streakCount.innerHTML = streak + " Days";

    }

}

// ---------- Reset Tracker ----------

function resetTracker() {

    if (!confirm("Reset today's habit tracker?")) return;

    habitChecks.forEach(check => {

        check.checked = false;
        check.parentElement.classList.remove("habit-complete");

        localStorage.removeItem(check.dataset.habit);

    });

    progressBar.style.width = "0%";
    progressBar.innerHTML = "0%";

    progressText.innerHTML = "0 / 6 Habits Completed";

}

// ---------- Badges ----------

function unlockBadges(completed) {

    const streak = Number(localStorage.getItem("familyStreak")) || 0;

    // Badge 1

    if (completed >= 3) {

        unlock("badge1", "🌱 Unlocked!");

    }

    // Badge 2

    if (streak >= 5) {

        unlock("badge2", "🔥 Unlocked!");

    }

    // Badge 3

    if (completed === totalHabits) {

        unlock("badge3", "❤️ Champion!");

    }

    // Badge 4

    if (streak >= 10) {

        unlock("badge4", "👑 Wellness Hero!");

    }

}

function unlock(id, text) {

    const badge = document.getElementById(id);

    badge.innerHTML = text;
    badge.classList.add("badge-unlocked");

}

// ---------- Motivation Quotes ----------

const habitQuotes = [

    "🌼 Every healthy habit is a gift to your child.",

    "💚 Families grow stronger one healthy habit at a time.",

    "📚 Read more, scroll less.",

    "🌈 Play together. Laugh together. Grow together.",

    "🌙 Healthy bedtime begins with screen-free evenings.",

    "🍎 Small habits create lifelong healthy memories.",

    "☀️ Spend time in sunshine, not only on screens.",

    "❤️ Children copy what parents do every day."

];

function newHabitQuote() {

    const random = Math.floor(Math.random() * habitQuotes.length);

    document.getElementById("habitQuote").innerHTML =
        habitQuotes[random];

}

// ---------- Celebration ----------

function celebration() {

    const emojis = ["🎉", "🌈", "⭐", "💚", "🎈", "✨"];

    for (let i = 0; i < 20; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        star.style.left = Math.random() * 100 + "vw";

        star.style.fontSize =
            (18 + Math.random() * 18) + "px";

        star.style.animationDuration =
            (3 + Math.random() * 2) + "s";

        document.body.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 5000);

    }

}

// ---------- Daily Wellness Tip Popup ----------

const dailyTips = [

    "💧 Drink water before picking up a phone.",

    "📵 Keep phones away during meals today.",

    "🌳 Spend 30 minutes outdoors with your child.",

    "📚 Read a bedtime story tonight.",

    "🎨 Create something together without screens.",

    "❤️ Talk with your child for 20 minutes today."

];

const popup = document.createElement("div");

popup.className = "badge-popup";

document.body.appendChild(popup);

function showDailyTip() {

    const random = Math.floor(Math.random() * dailyTips.length);

    popup.innerHTML = dailyTips[random];

    popup.classList.add("show-popup");

    setTimeout(() => {

        popup.classList.remove("show-popup");

    }, 5000);

}

setTimeout(showDailyTip, 3000);
setInterval(showDailyTip, 20000);

console.log("💚 Habit Tracker Loaded Successfully!");