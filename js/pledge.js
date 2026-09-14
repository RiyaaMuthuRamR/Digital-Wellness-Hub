/* ==========================================
   DIGITAL WELLNESS HUB
   FAMILY PLEDGE PAGE
========================================== */

const pledgeChecks = document.querySelectorAll(".pledge-check");

// ---------------- LOAD SAVED PLEDGES ----------------

window.addEventListener("DOMContentLoaded",()=>{

    pledgeChecks.forEach((check,index)=>{

        const saved = localStorage.getItem("pledge"+index);

        if(saved==="true"){
            check.checked = true;
            check.parentElement.classList.add("pledge-complete");
        }

    });

    newFamilyQuote();

});

// ---------------- SAVE CHECKBOXES ----------------

pledgeChecks.forEach((check,index)=>{

    check.addEventListener("change",()=>{

        localStorage.setItem("pledge"+index,check.checked);

        if(check.checked){
            check.parentElement.classList.add("pledge-complete");
        }else{
            check.parentElement.classList.remove("pledge-complete");
        }

    });

});

// ---------------- COMPLETE PLEDGE ----------------

function completePledge(){

    let completed=0;

    pledgeChecks.forEach(check=>{
        if(check.checked) completed++;
    });

    if(completed!==pledgeChecks.length){
        alert("💚 Please complete all family promises first!");
        return;
    }

    launchHearts();

    alert("🎉 Congratulations! Your family has taken the Digital Wellness Pledge.");

}

// ---------------- CERTIFICATE ----------------

function generateCertificate(){

    const family=document.getElementById("familyName").value.trim();
    const child=document.getElementById("childName").value.trim();

    if(family==="" || child===""){
        alert("Please enter both Family Name and Child Name.");
        return;
    }

    document.getElementById("certificateFamily").innerHTML =
        "🏡 The " + family + " Family";

    document.getElementById("certificateChild").innerHTML =
        "🌟 Proud Parent of " + child;

    document.querySelector(".certificate-preview")
        .classList.add("certificate-success");

    launchHearts();

}

// ---------------- RANDOM FAMILY QUOTES ----------------

const familyQuotes=[

"Children need more memories than screen time. 💚",

"The greatest app is family time together. 🌈",

"Healthy habits begin with loving parents. ❤️",

"Play together. Read together. Grow together. 📚",

"Little hands need stories, sunshine and sleep—not endless scrolling. ☀️",

"Family conversations are the best notifications. 😊",

"Every screen-free evening is a happier bedtime. 🌙",

"Technology is a tool. Family is forever. 💚"

];

function newFamilyQuote(){

    const random=Math.floor(Math.random()*familyQuotes.length);

    document.getElementById("familyQuote").innerHTML =
        familyQuotes[random];

}

// ---------------- HEART CELEBRATION ----------------

function launchHearts(){

    const hearts=["💚","🌈","⭐","🎉","❤️","✨"];

    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.className="heart-float";

        heart.innerHTML=
            hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

}

// ---------------- WELLNESS MESSAGE POPUP ----------------

const wellnessMessages=[

"💚 Screen-free meals create stronger family bonds.",

"🌙 Sleep is more powerful than late-night scrolling.",

"🌳 Outdoor play is today's superpower.",

"📚 Reading together grows imagination.",

"❤️ Your child learns digital habits by watching you.",

"😊 One hour less screen time means one hour more memories."

];

const popup=document.createElement("div");

popup.className="badge-popup";

document.body.appendChild(popup);

function showWellnessMessage(){

    const random=Math.floor(Math.random()*wellnessMessages.length);

    popup.innerHTML=wellnessMessages[random];

    popup.classList.add("show-popup");

    setTimeout(()=>{
        popup.classList.remove("show-popup");
    },5000);

}

setTimeout(showWellnessMessage,3000);
setInterval(showWellnessMessage,25000);

console.log("💚 Family Pledge Page Loaded Successfully!");
// ---------------- PRINT ONLY CERTIFICATE ----------------

function printCertificate() {

    const certificate = document.querySelector(".certificate-preview");

    if (!certificate) {
        alert("Certificate not found.");
        return;
    }

    const printWindow = window.open("", "_blank", "width=1000,height=800");

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>

            <title>Family Digital Wellness Certificate</title>

            <style>

                *{
                    box-sizing:border-box;
                }

                body{
                    margin:0;
                    padding:30px;
                    background:white;
                    font-family:Arial, sans-serif;
                    display:flex;
                    justify-content:center;
                }

                .certificate{
                    width:100%;
                    max-width:900px;
                    min-height:600px;
                    padding:60px;
                    text-align:center;
                    border:10px solid #FFD54F;
                    border-radius:30px;
                    background:linear-gradient(135deg,#FFFCEB,#F7FFF8);
                    box-shadow:none;
                }

                .certificate img{
                    width:120px;
                    height:120px;
                    object-fit:cover;
                    border-radius:50%;
                    margin-bottom:20px;
                }

                .certificate h3{
                    font-size:36px;
                    color:#1565C0;
                    margin:25px 0 15px;
                }

                .certificate h4{
                    font-size:24px;
                    color:#FF5A5F;
                    margin-bottom:25px;
                }

                .certificate p{
                    font-size:18px;
                    line-height:1.7;
                    color:#444;
                }

                .certificate h5{
                    margin-top:35px;
                    color:#126782;
                    font-size:18px;
                }

                @page{
                    size:A4 landscape;
                    margin:15mm;
                }

            </style>

        </head>

        <body>

            <div class="certificate">

                ${certificate.innerHTML}

            </div>

        </body>
        </html>
    `);

    printWindow.document.close();

    printWindow.onload = function () {

        printWindow.focus();
        printWindow.print();

        setTimeout(() => {
            printWindow.close();
        }, 1000);

    };

}