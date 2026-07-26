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

// Today's Focus

const focus = document.getElementById("todayFocus");
const description = document.getElementById("focusDescription");

const weekday = new Date().getDay();

switch(weekday){

case 1:
focus.textContent="Recovery & Mobility";
description.textContent="Recover from training. Stretch, hydrate, and prepare for the week.";
break;

case 2:
focus.textContent="Upper Body Weights";
description.textContent="Baseball lifting day. Focus on good form and controlled reps.";
break;

case 3:
focus.textContent="Explosive Power";
description.textContent="Medicine balls, battle ropes, and athletic movement.";
break;

case 4:
focus.textContent="Leg Day";
description.textContent="Build lower-body strength and don't skip stretching.";
break;

case 5:
focus.textContent="Recovery Run";
description.textContent="Stay consistent and recover for the weekend.";
break;

case 6:
focus.textContent="Personal Training";
description.textContent="Work on any area you'd like to improve.";
break;

default:
focus.textContent="Rest Day";
description.textContent="Recharge and get ready for the upcoming week.";

}
