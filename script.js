const totalDoors = 21;
const now = new Date();
const start = new Date(2026, 4, 21);
const difference = now - start;
const dayNumber = Math.floor(difference / (1000* 60* 60* 24)) + 1;
const today = Math.min(Math.max(dayNumber, 0), totalDoors);
 const grid = document.getElementById("calendar-grid");

const notes = {
    1: "Day one. I'm really glad you exist.",
    2: "You make ordinary moments feel special.",
    3: "I made this because I couldn't stop thinking about how to make you smile.",
    4: "Some people make the world feel bigger. You're one of them.",
    5: "I like the way you see things.",
    6: "Six days in. Still no regrets building this.",
    7: "Today's door is today. Whatever it holds — I hope it's a good one."
};
for (let i = 1; i <= totalDoors; i++) {
    const door = document.createElement("div");
    door.classList.add("door");
    door.textContent = i;

    if (i < today) {
        door.classList.add("opened");
    } else if (i === today) {
        door.classList.add("unlocked");
    } else {
        door.classList.add("locked");
    }
    if (i <= today) {
        door.addEventListener("click", function (){
            const overlay = document.getElementById("modal-overlay");
            const dayText = document.getElementById("modal-day");
            const messageText = document.getElementById("modal-message");
            
            dayText.textContent = "Day " + i;
            messageText.textContent = notes[i];
            overlay.style.display = "flex";
        });
    }
    grid.appendChild(door);
}

document.getElementById("modal-close").addEventListener("click", function(){
    document.getElementById("modal-overlay").style.display = "none";
});