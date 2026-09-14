/* ==========================================
   DIGITAL WELLNESS HUB
   SLEEP HUB PAGE
========================================== */

/* ---------- Bedtime Calculator ---------- */

function calculateBedtime(){

    const wakeTime = document.getElementById("wakeTime").value;

    if(wakeTime === ""){
        alert("Please select a wake-up time.");
        return;
    }

    const [hour, minute] = wakeTime.split(":").map(Number);

    let bedtimeHour = hour - 10;

    if(bedtimeHour < 0){
        bedtimeHour += 24;
    }

    const bedtime =
        String(bedtimeHour).padStart(2,"0") + ":" +
        String(minute).padStart(2,"0");

    document.getElementById("bedtimeResult").innerHTML = bedtime;

    document.getElementById("bedtimeText").innerHTML =
    "✨ To wake up at <strong>" + wakeTime +
    "</strong>, try sleeping around <strong>" +
    bedtime + "</strong> for a healthy sleep routine.";

}

/* ---------- Sleep Checklist ---------- */

const routineChecks = document.querySelectorAll(".routine-check");

window.addEventListener("DOMContentLoaded",()=>{

    routineChecks.forEach((check,index)=>{

        const saved =
        localStorage.getItem("routine"+index);

        if(saved==="true"){
            check.checked = true;
            check.parentElement.classList.add("routine-complete");
        }

    });

    loadSleepRating();
    newSleepTip();

});

routineChecks.forEach((check,index)=>{

    check.addEventListener("change",()=>{

        localStorage.setItem("routine"+index,check.checked);

        if(check.checked){
            check.parentElement.classList.add("routine-complete");
        }else{
            check.parentElement.classList.remove("routine-complete");
        }

        checkRoutineCompletion();

    });

});

/* ---------- Celebration ---------- */

function checkRoutineCompletion(){

    let completed = 0;

    routineChecks.forEach(check=>{
        if(check.checked) completed++;
    });

    if(completed === routineChecks.length){
        launchStars();
        alert("🌙 Wonderful! Bedtime routine completed.");
    }

}

/* ---------- Sleep Rating ---------- */

const stars = document.querySelectorAll(".star-rate");

stars.forEach(star=>{

    star.addEventListener("click",()=>{

        const rating = star.dataset.value;

        saveSleepRating(rating);

    });

});

function saveSleepRating(rating){

    localStorage.setItem("sleepRating",rating);

    updateStars(rating);

}

function loadSleepRating(){

    const rating =
    localStorage.getItem("sleepRating");

    if(rating){
        updateStars(rating);
    }

}

function updateStars(rating){

    stars.forEach(star=>{

        if(star.dataset.value <= rating){
            star.classList.add("star-selected");
        }else{
            star.classList.remove("star-selected");
        }

    });

    const message = document.getElementById("sleepRating");

    if(rating==5){

        message.innerHTML="🌟 Excellent Sleep! Keep it up.";

    }else if(rating>=4){

        message.innerHTML="😊 Very Good Sleep Quality.";

    }else if(rating>=3){

        message.innerHTML="🙂 Good Sleep. Can Improve.";

    }else if(rating>=2){

        message.innerHTML="😴 Sleep Needs Improvement.";

    }else{

        message.innerHTML="🌙 Poor Sleep. Try a better bedtime routine.";

    }

}

/* ---------- Sleep Tips ---------- */

const sleepTips=[

"📵 Turn off screens at least one hour before bedtime.",

"📚 Reading a bedtime story helps children relax.",

"🌙 Keep your bedroom dark and quiet for better sleep.",

"💧 Drink water, but avoid sugary drinks before sleeping.",

"🎵 Soft music can help children fall asleep peacefully.",

"❤️ A good night hug reduces bedtime anxiety.",

"🌟 Wake up and sleep at the same time every day.",

"☁️ Deep breathing helps calm the mind before sleep."

];

function newSleepTip(){

    const random =
    Math.floor(Math.random()*sleepTips.length);

    document.getElementById("sleepTip").innerHTML =
    sleepTips[random];

}

/* ---------- Floating Moon & Stars ---------- */

const nightIcons = ["⭐","🌙","✨","☁️"];

function createNightIcon(){

    const icon = document.createElement("div");

    icon.className="night-star";

    icon.innerHTML =
    nightIcons[Math.floor(Math.random()*nightIcons.length)];

    icon.style.left=Math.random()*100+"vw";
    icon.style.fontSize=(20+Math.random()*20)+"px";
    icon.style.animationDuration=(5+Math.random()*3)+"s";

    document.body.appendChild(icon);

    setTimeout(()=>{
        icon.remove();
    },8000);

}

setInterval(createNightIcon,2500);

/* ---------- Celebration Stars ---------- */

function launchStars(){

    const emojis=["⭐","🌙","✨","💙","🌈"];

    for(let i=0;i<25;i++){

        const star=document.createElement("div");

        star.className="night-star";
        star.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        star.style.left=Math.random()*100+"vw";
        star.style.fontSize=(18+Math.random()*18)+"px";
        star.style.animationDuration=(3+Math.random()*2)+"s";

        document.body.appendChild(star);

        setTimeout(()=>{
            star.remove();
        },5000);

    }

}

/* ---------- Popup Sleep Tip ---------- */

const popup=document.createElement("div");

popup.className="sleep-popup";

document.body.appendChild(popup);

function popupTip(){

    const random =
    Math.floor(Math.random()*sleepTips.length);

    popup.innerHTML=sleepTips[random];

    popup.classList.add("show-sleep-popup");

    setTimeout(()=>{
        popup.classList.remove("show-sleep-popup");
    },5000);

}

setTimeout(popupTip,4000);
setInterval(popupTip,25000);

console.log("🌙 Sleep Hub Loaded Successfully!");