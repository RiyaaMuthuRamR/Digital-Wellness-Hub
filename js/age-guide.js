/* ==========================================
      DIGITAL WELLNESS HUB
         AGE GUIDE PAGE JS
========================================== */

// ---------------- AGE DATA ----------------

const ageData = [

{
title:"👶 Babies (0–2 Years)",
description:"Avoid entertainment screen time. Babies learn best through talking, singing, eye contact, cuddling and sensory play with parents.",
screen:"🚫 Avoid entertainment screens. Video calls with family are okay.",
sleep:"😴 12–16 hours including naps.",
activity:"🧸 Singing, tummy time, sensory toys, picture books and talking."
},

{
title:"🎨 Toddlers (2–5 Years)",
description:"Choose short educational content with parents and encourage imaginative play instead of long screen sessions.",
screen:"⏱ Up to 1 hour of supervised educational screen time.",
sleep:"😴 10–13 hours of sleep every day.",
activity:"🎨 Drawing, puzzles, dancing, storytelling, clay, outdoor play."
},

{
title:"📚 School Kids (6–12 Years)",
description:"Create a healthy balance between study, outdoor activities, hobbies and entertainment.",
screen:"⏱ 1–2 hours recreational screen time with regular breaks.",
sleep:"😴 9–12 hours every night.",
activity:"⚽ Cycling, football, crafts, reading, gardening, music."
},

{
title:"🌟 Teenagers (13–15 Years)",
description:"Teach responsible social media use and encourage healthy bedtime habits.",
screen:"📱 Balanced screen time with bedtime limits and offline hobbies.",
sleep:"😴 8–10 hours of sleep every night.",
activity:"📷 Photography, sports, painting, volunteering, journaling."
}

];

// ---------------- CHANGE AGE CONTENT ----------------

function showAge(index){

document.getElementById("ageTitle").innerHTML =
ageData[index].title;

document.getElementById("ageDescription").innerHTML =
ageData[index].description;

document.getElementById("screenTime").innerHTML =
ageData[index].screen;

document.getElementById("sleepGoal").innerHTML =
ageData[index].sleep;

document.getElementById("activityGoal").innerHTML =
ageData[index].activity;

// highlight selected card
const cards = document.querySelectorAll(".age-select-card");

cards.forEach(card=>card.classList.remove("selected-age"));

cards[index].classList.add("selected-age");

// smooth scroll to details
document.querySelector(".age-details")
.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

// Default content
window.addEventListener("DOMContentLoaded",()=>{

showAge(0);

});

// ---------------- REVEAL ANIMATION ----------------

const revealItems = document.querySelectorAll(
".age-select-card,.mini-card,.recommend-card,.offline-card,.warning-card,.tip-box,.timeline-item"
);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealItems.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});

// ---------------- RANDOM PARENT TIP ----------------

const parentTips=[

"💚 Keep bedrooms screen-free before bedtime.",

"📚 Read a story instead of watching videos at night.",

"🍽 Make family meals a phone-free zone.",

"🌳 Spend at least 20 minutes outdoors every day.",

"❤️ Be a role model — children copy parents' screen habits.",

"🎲 Plan one screen-free family activity every weekend."

];

const tipBox=document.createElement("div");

tipBox.className="floating-tip";

document.body.appendChild(tipBox);

function showRandomTip(){

const random=Math.floor(Math.random()*parentTips.length);

tipBox.innerHTML=parentTips[random];

tipBox.classList.add("show-tip");

setTimeout(()=>{
tipBox.classList.remove("show-tip");
},5000);

}

// show after page loads
setTimeout(showRandomTip,3000);

// show every 20 seconds
setInterval(showRandomTip,20000);

// ---------------- SLEEP PROGRESS ANIMATION ----------------

const timelineItems=document.querySelectorAll(".timeline-item");

timelineItems.forEach((item,index)=>{

item.style.animationDelay=`${index*0.3}s`;

});

// ---------------- SCREEN TIME BADGE COLORS ----------------

const recommendCards=document.querySelectorAll(".recommend-card");

recommendCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ---------------- PARENT TIPS HOVER EMOJI ----------------

const tipBoxes=document.querySelectorAll(".tip-box");

tipBoxes.forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.innerHTML+=" 🌈";

});

box.addEventListener("mouseleave",()=>{

box.innerHTML=box.innerHTML.replace(" 🌈","");

});

});

console.log("👶 Age Guide Loaded Successfully!");