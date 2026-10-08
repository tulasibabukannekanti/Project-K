function showQuestion() {

    document.getElementById("mainBox").innerHTML = `

        <h1>💕 One Question...</h1>

        <p>
            Will you go on a date with me? 🌹
        </p>

        <button id="yesBtn" onclick="sayYes()">
            YES ❤️
        </button>

        <button id="noBtn">
            NO 😁
        </button>
    `;

    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", moveNoButton);

    noBtn.addEventListener("touchstart", function(event) {
        event.preventDefault();
        moveNoButton();
    });
}


function moveNoButton() {

    const noBtn = document.getElementById("noBtn");

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}


function sayYes() {

    document.getElementById("mainBox").innerHTML = `

        <h1>🥰 YAY! ❤️</h1>

        <p>
            I knew you would say YES! 💕
        </p>

        <p>
            Now let's choose our date... 🌹
        </p>

        <label for="date">📅 Pick a date:</label>

        <br><br>

        <input type="date" id="date">

        <br><br>

        <button onclick="confirmDate()">
            Continue ❤️
        </button>
    `;
}


function confirmDate() {

    const selectedDate = document.getElementById("date").value;

    if (selectedDate === "") {

        alert("Please choose a date first! 💕");
        return;
    }

    document.getElementById("mainBox").innerHTML = `

        <h1>💖 It's a Date!</h1>

        <p>Our date is on:</p>

        <h2>📅 ${selectedDate}</h2>

        <p>
            I can't wait! 🥰🌹
        </p>
    `;
}