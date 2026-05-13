// --- CONFIGURATION ---
const targetDate = new Date("May 14, 2026 00:00:00").getTime();

// --- TIMER LOGIC ---
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d < 10 ? "0"+d : d;
    document.getElementById("hours").innerText = h < 10 ? "0"+h : h;
    document.getElementById("mins").innerText = m < 10 ? "0"+m : m;
    document.getElementById("secs").innerText = s < 10 ? "0"+s : s;

   // script.js mein is hisse ko update karein
if (distance <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").style.display = "none";
    document.getElementById("countdown-title").innerHTML = "Finally Time is over <br> Party Time! 🎉✨";
    
    // Zyada pink background ko rokne ke liye:

    // script.js mein is line ko bhi update karein
document.body.style.background = "radial-gradient(circle at center, #ffffff 15%, #fce4ec 75%)"; // Ekdum light white-pink
    document.getElementById("open-btn").classList.remove("hidden");
}
}, 1000);


// Check Date Logic
function checkDate() {
    const now = new Date().getTime();
    
    if (now >= targetDate) {
        // Agar date aa gayi toh surprise section
        nextSection('section-ready');
    } else {
        // Agar date nahi aayi toh wait section
        nextSection('section-wait');
    }
}

// Section badalne ka function
function nextSection(id) {
    // Sab sections se 'active' class hatao
    document.querySelectorAll('section').forEach(s => {
        s.classList.remove('active');
    });
    // Sirf target section ko 'active' karo
    document.getElementById(id).classList.add('active');
}

// --- NAVIGATION ---
function nextSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// --- READY SECTION LOGIC ---
function showNotSatisfied() {
    document.getElementById('ready-btns').style.display = 'none';
    document.getElementById('not-satisfied').classList.remove('hidden');
}

// --- CARD FLIP LOGIC ---
function flipCard(card) {
    card.classList.toggle('is-flipped');
}

// --- QUIZ 1 LOGIC ---
function rightAns(nextId) {
    const msg = document.getElementById("quiz1-msg");
    msg.innerText = "So sweet! Correct ❤️";
    msg.style.color = "green";
    setTimeout(() => {
        nextSection(nextId);
    }, 1500);
}

function wrongAns(btn) {
    const msg = document.getElementById("quiz1-msg");
    msg.innerText = "How rude! Try again 😤";
    msg.style.color = "red";
    btn.style.background = "#ffcccc";
}

// --- QUIZ 2 LOGIC ---
function rightAnsQuiz2() {
    const msg = document.getElementById("quiz2-msg");
    msg.innerText = "Yeah sai btaya! So sweet ❤️";
    msg.style.color = "green";
    document.getElementById("gift-btn").classList.remove("hidden");
}

function wrongAnsQuiz2(btn) {
    const msg = document.getElementById("quiz2-msg");
    msg.innerText = "How rude! Try again 😤";
    msg.style.color = "red";
    btn.style.background = "#ffcccc";
}