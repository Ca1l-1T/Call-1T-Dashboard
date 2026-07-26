// ===============================
// CALL-1T Dashboard v0.1
// ===============================

// Greeting
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning 👋";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon 👋";
} else {
    greeting.textContent = "Good Evening 👋";
}

// Daily Missions
const missions = [
    "Become stronger than yesterday.",
    "Every rep counts.",
    "Stay consistent.",
    "Recovery is part of progress.",
    "Push yourself today.",
    "Discipline beats motivation.",
    "Give your future self something to thank you for."
];

const mission = document.getElementById("mission");

const today = new Date().getDate();

mission.textContent = missions[today % missions.length];

// Water Tracker

let water = Number(localStorage.getItem("water")) || 0;

const waterFill = document.getElementById("waterFill");
const waterText = document.getElementById("waterText");
const waterButton = document.getElementById("waterButton");

function updateWater(){

    if(water > 8){
        water = 8;
    }

    waterFill.style.width = (water / 8) * 100 + "%";

    waterText.textContent = water + " / 8 Cups";

    localStorage.setItem("water", water);
}

waterButton.onclick = () => {

    if(water < 8){

        water++;

        updateWater();

    }

};

updateWater();

// Simple Workout Rotation

const workoutDay = document.getElementById("workoutDay");

const workouts = [
    "Push Day 💪",
    "Pull Day 💪",
    "Leg Day 🦵",
    "Recovery 🧘",
    "Upper Body 🔥",
    "Conditioning 🏃",
    "Rest 😴"
];

const day = new Date().getDay();

workoutDay.textContent = workouts[day];

// Streak

const streak = document.getElementById("streak");

let streakDays = Number(localStorage.getItem("streak")) || 0;

streak.textContent = streakDays + " Days";

// Live Date & Time

const dateTime = document.getElementById("dateTime");

function updateClock(){

    const now = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString(undefined, options);

    const time = now.toLocaleTimeString([],{
        hour:"numeric",
        minute:"2-digit"
    });

    dateTime.textContent = `${date} • ${time}`;

}

updateClock();

setInterval(updateClock,1000);
