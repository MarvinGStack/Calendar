const totalDoors = 21;
const now = new Date();
const start = new Date(2026, 4, 25);
const difference = now - start;
const dayNumber = Math.floor(difference / (1000* 60* 60* 24)) + 1;
const today = Math.min(Math.max(dayNumber, 0), totalDoors);
 const grid = document.getElementById("calendar-grid");
if(localStorage.getItem("chapterTwoUnlocked") === "true"){
    document.getElementById("chapter-two").style.display ="block";
}
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
            messageText.textContent = notesOne[i];
            overlay.style.display = "flex";

            const card = document.querySelector(".modal-card");
            card.classList.remove("week-1", "week-2", "week-3", "week-4", "week-5", "week-6");

            if (i <= 7) card.classList.add("week-1");
            else if (i <= 14) card.classList.add("week-2");
            else card.classList.add("week-3");

            const existingBtn = document.getElementById("chapter-two-btn");
            if (existingBtn) existingBtn.remove();

            if (i === 21) {
                const secretButton = document.createElement("button");
                secretButton.textContent = "Open Chapter Two";
                secretButton.id = "chapter-two-btn";
                card.appendChild(secretButton);
            }
        });
    }
    grid.appendChild(door);
}

document.getElementById("modal-close").addEventListener("click", function(){
    document.getElementById("modal-overlay").style.display = "none";
    });

document.addEventListener("click", function(e) {
    if ( e.target && e.target.id === "chapter-two-btn") {
        document.getElementById("modal-overlay").style.display = "none";
        document.getElementById("chapter-two").style.display = "block";
        localStorage.setItem("chapterTwoUnlocked", "true");
        window.scrollTo({ 
            top: document.getElementById("chapter-two").offsetTop, 
            behavior: "smooth" 
        });
    }
});
const totalDoorstwo = 21;
const starttwo = new Date(2026,5, 15);
const differencetwo = now - starttwo;
const dayNumberTwo = Math.floor(differencetwo / (1000 * 60 * 60 *24 )) + 1;
const todaytwo = Math.min(Math.max(dayNumberTwo, 0), totalDoorstwo);
const gridtwo = document.getElementById("calendar-grid-two");

for (let i = 1; i <= totalDoorstwo; i++) {
    const door = document.createElement("div");
    door.classList.add("door");
    door.textContent = i;
    if ( i < todaytwo) {
        door.classList.add("opened");
    } else if ( i === todaytwo) {
        door.classList.add("unlocked");
    } else {
        door.classList.add("locked");
    }
if (i <= todaytwo) {
    door.addEventListener("click", function(){
        const overlay = document.getElementById("modal-overlay");
        const dayText = document.getElementById("modal-day");
        const messageText = document.getElementById("modal-message");
        dayText.textContent = "Day " + i;
        messageText.textContent = notesTwo[i];
        overlay.style.display = "flex";

        const card = document.querySelector(".modal-card");
        card.classList.remove("week-1", "week-2", "week-3", "week-4", "week-5", "week-6");
        if (i <= 7) card.classList.add("week-4");
        else if (i <= 14) card.classList.add("week-5");
        else card.classList.add("week-6");
    });
}
gridtwo.appendChild(door);
}