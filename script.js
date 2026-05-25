const totalDoors = 21;
const now = new Date();
const start = new Date(2026, 4, 25);
const difference = now - start;
const dayNumber = Math.floor(difference / (1000* 60* 60* 24)) + 1;
const today = Math.min(Math.max(dayNumber, 0), totalDoors);
 const grid = document.getElementById("calendar-grid");

const notes = {
    1: "You told me you really liked my good morning or good night messages. I hope this will put an even bigger smile on your face.",
    2: "After we spoke for the first time, I was already obsessed with your laugh and told everyone about it.",
    3: "I remember the first time you didn't respond when I went to bed. I was afraid you didn't like me. Glad I was just overthinking.",
    4: "You're the most amazing human I know. I hope I can make you feel that every day.",
    5: "I don't know what I did to deserve you, but I will make sure to never take you for granted.",
    6: "I hope with me you feel less alone.",
    7: "Whenever I see a notification from you, I can't help myself but smile.",
    8: "I can't wait to dance in the rain with you.",
    9: "I never thought that joking around would put me in a position to meet you. I'm very grateful that I did.",
    10: "Thank you for being part of my everyday life.",
    11: "Hearing you laugh makes me feel one hundred times better. In an instant.",
    12:" Everyday I keep falling for you. Each laugh, ragebait or regular conversation makes me fall more and more.",
    13: "The day I get to see your eyes in front of me, will be one of the best days of my life.",
    14: "Being with you makes the world brighter. I can't stop thanking you for that.",
    15: "You are my safe place and I hope I can be yours.",
    16: "You make me want to be a better person. Iam eternally grateful for that and for you.",
    17: "Annoying you online is fun, I can't even begin to imagine how fun it will be in person.",
    18: "You choosing to spend time with me makes me the luckiest person to ever exist.",
    19: "One day you will be able to see yourself how I see you.",
    20: "I will always be there for you. I will listen to any problem, any bad thought. You will not have to go through the bad times alone anymore.",
    21: "I will wrap that red scarf around you one day.",
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
            const card = document.querySelector(".modal-card");
            card.classList.remove("week-1", "week-2", "week-3");

if (i <= 7) card.classList.add("week-1");
else if (i <= 14) card.classList.add("week-2");
else card.classList.add("week-3");
        });
    }
    grid.appendChild(door);
}

document.getElementById("modal-close").addEventListener("click", function(){
    document.getElementById("modal-overlay").style.display = "none";
});