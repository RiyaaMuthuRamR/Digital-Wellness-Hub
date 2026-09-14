/* ==========================================
   DIGITAL WELLNESS HUB
   SCREEN TIME CALCULATOR
========================================== */

function calculateScore() {

    const age = Number(document.getElementById("age").value);
    const screen = Number(document.getElementById("screenHours").value);
    const sleep = Number(document.getElementById("sleepHours").value);
    const play = Number(document.getElementById("playTime").value);

    // Validation
    if (age === 0 || isNaN(screen) || isNaN(sleep) || isNaN(play)) {
        alert("Please fill all the fields.");
        return;
    }

    let score = 100;

    /* ---------- Screen Time Score ---------- */

    if (age <= 2) {
        if (screen > 0) score -= 35;
    }

    else if (age <= 5) {
        if (screen > 1) score -= (screen - 1) * 15;
    }

    else if (age <= 12) {
        if (screen > 2) score -= (screen - 2) * 10;
    }

    else {
        if (screen > 3) score -= (screen - 3) * 8;
    }

    /* ---------- Sleep Score ---------- */

    if (age <= 2) {

        if (sleep < 12) score -= 20;

    }

    else if (age <= 5) {

        if (sleep < 10) score -= 18;

    }

    else if (age <= 12) {

        if (sleep < 9) score -= 15;

    }

    else {

        if (sleep < 8) score -= 12;

    }

    /* ---------- Outdoor Play Score ---------- */

    if (play < 20) {

        score -= 20;

    }

    else if (play < 40) {

        score -= 10;

    }

    if (score < 0) score = 0;
    if (score > 100) score = 100;

    displayResult(score);

}

/* ==========================================
      DISPLAY RESULT
========================================== */

function displayResult(score) {

    const scoreValue = document.getElementById("scoreValue");
    const scoreStatus = document.getElementById("scoreStatus");
    const recommendation = document.getElementById("recommendation");
    const scoreBar = document.getElementById("scoreBar");
    const resultImage = document.getElementById("resultImage");

    scoreValue.innerHTML = score;

    scoreBar.style.width = score + "%";
    scoreBar.innerHTML = score + "%";

    // Excellent

    if (score >= 80) {

        scoreStatus.innerHTML = "🟢 Excellent Digital Wellness!";

        recommendation.innerHTML =
        "Fantastic! Your child has healthy screen habits. Continue outdoor play, reading time and family conversations every day.";

        scoreBar.style.background = "#35C759";

        resultImage.src = "images/c1.jpg";

    }

    // Good

    else if (score >= 60) {

        scoreStatus.innerHTML = "🟡 Good, But Can Improve!";

        recommendation.innerHTML =
        "Reduce unnecessary screen time and encourage one more hour of outdoor play or reading.";

        scoreBar.style.background = "#FFC107";

        resultImage.src = "images/c2.jpg";

    }

    // Needs Improvement

    else if (score >= 40) {

        scoreStatus.innerHTML = "🟠 Needs Improvement";

        recommendation.innerHTML =
        "Create a phone-free bedtime routine, increase sleep and spend more quality family time together.";

        scoreBar.style.background = "#FF8C42";

        resultImage.src = "images/c3.jpg";

    }

    // Poor

    else {

        scoreStatus.innerHTML = "🔴 High Screen Time Risk";

        recommendation.innerHTML =
        "Screen habits need attention. Reduce daily screen time gradually, increase outdoor play and build healthy routines.";

        scoreBar.style.background = "#FF4D6D";

        resultImage.src = "images/c4.jpg";

    }

    // Animation

    scoreValue.classList.add("pop");

    setTimeout(() => {
        scoreValue.classList.remove("pop");
    }, 700);

    launchCelebration(score);

}

/* ==========================================
        CELEBRATION ANIMATION
========================================== */

function launchCelebration(score){

    if(score < 80) return;

    const emojis = ["🎉","🌈","⭐","💚","✨","🎈"];

    for(let i=0;i<25;i++){

        const emoji=document.createElement("div");

        emoji.className="floating-heart";
        emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        emoji.style.left=Math.random()*100+"vw";
        emoji.style.fontSize=(18+Math.random()*18)+"px";
        emoji.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(emoji);

        setTimeout(()=>{
            emoji.remove();
        },6000);

    }

}

/* ==========================================
      RANDOM DIGITAL WELLNESS FACTS
========================================== */

const facts = [

"📚 Children learn better when screens are balanced with reading.",

"🌳 Outdoor play improves focus and creativity.",

"😴 One hour without screens before sleep helps better rest.",

"👀 Follow the 20-20-20 rule to reduce eye strain.",

"🍽 Phone-free meals improve family bonding.",

"🎨 Creative play is healthier than passive scrolling."

];

const factBox = document.createElement("div");
factBox.className = "fact-popup";

document.body.appendChild(factBox);

function showFact(){

    const random = Math.floor(Math.random()*facts.length);

    factBox.innerHTML = facts[random];

    factBox.classList.add("show-fact");

    setTimeout(()=>{
        factBox.classList.remove("show-fact");
    },5000);

}

setTimeout(showFact,4000);
setInterval(showFact,20000);

/* ==========================================
     LIVE SLIDER PREVIEW (Optional)
========================================== */

const inputs=document.querySelectorAll("input,select");

inputs.forEach(input=>{

    input.addEventListener("change",()=>{

        const filled =
        document.getElementById("age").value &&
        document.getElementById("screenHours").value &&
        document.getElementById("sleepHours").value &&
        document.getElementById("playTime").value;

        if(filled){

            document.querySelector(".calculator-box h2").innerHTML =
            "🌈 Ready to Calculate!";

        }

    });

});

console.log("📱 Screen Time Calculator Loaded Successfully!");