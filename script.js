function buildCalendar(totalDoors, startDate, notes, gridId, weekClasses, hasSecretButton) {
    const now = new Date ();
    const difference = now - startDate;
    const dayNumber = Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
    const today = Math.min(Math.max(dayNumber, 0), totalDoors);
    const grid = document.getElementById(gridId);

    for (let i = 1; i <= totalDoors; i++) {
        const door = document.createElement("div");
        door.classList.add("door");
        const numberSpan = document.createElement("span");
        numberSpan.textContent = i;
        door.appendChild(numberSpan);
        
        const icon = document.createElement("span");
        icon.classList.add("door-icon");
        door.appendChild(icon);
        
        if (i < today) {
            door.classList.add("opened");
            icon.textContent = "✓";
        } else if (i === today) {
            door.classList.add("unlocked");
            icon.textContent = "★";
        } else {
            door.classList.add("locked");
            icon.textContent = "🔒";
        }

        if (i <= today) {
            door.addEventListener("click", function () {
                const overlay = document.getElementById("modal-overlay");
                const dayText = document.getElementById("modal-day");
                const messageText = document.getElementById("modal-message");

                dayText.textContent = "Day " + i;
                messageText.textContent = notes[i];
                overlay.style.display = "flex";

                const card = document.querySelector(".modal-card");
                card.classList.remove("week-1", "week-2", "week-3", "week-4", "week-5", "week-6");
                
                if (i <= 7) card.classList.add(weekClasses[0]);
                else if (i  <= 14) card.classList.add(weekClasses[1]);
                else card.classList.add(weekClasses[2]);

                const existingBtn = document.getElementById("chapter-two-btn");
                if (existingBtn) existingBtn.remove();

                if (hasSecretButton && i === totalDoors) {
                    const secretButton = document.createElement("button");
                    secretButton.textContent = "Open Chapter Two";
                    secretButton.id = "chapter-two-btn";
                    card.appendChild(secretButton);
                }
            });
        } else {
            door.addEventListener("click", function () {
                door.classList.add("shake");
                setTimeout(function () {
                    door.classList.remove("shake");
                }, 300);
            });
        }
        grid.appendChild(door);
    }
}

buildCalendar(21, new Date(2026, 4, 25), notesOne, "calendar-grid", ["week-1", "week-2", "week-3"], true);
buildCalendar(21, new Date(2026, 5, 30), notesTwo, "calendar-grid-two", ["week-4", "week-5", "week-6"], false);

if (localStorage.getItem("chapterTwoUnlocked") === "true") {
    document.getElementById("chapter-two").style.display = "block";
}

document.getElementById("modal-close").addEventListener("click", function () {
    document.getElementById("modal-overlay").style.display = "none";
});

document.getElementById("modal-overlay").addEventListener("click", function (e) {
    if (e.target.id === "modal-overlay") {
        document.getElementById("modal-overlay").style.display = "none";
    }
});
document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "chapter-two-btn") {
        document.getElementById("modal-overlay").style.display ="none";
        document.getElementById("chapter-two").style.display = "block";
        localStorage.setItem("chapterTwoUnlocked", "true");
        window.scrollTo({
            top: document.getElementById("chapter-two").offsetTop,
            behavior: "smooth"
        });
    }
});