function test() {
    alert("Hello, world!");
}

function bring() {
    const directory = "./php/gib.php";
    fetch(directory, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => addContent(data))
}

function addContent(data) {
    const content = document.getElementById("photos");
    data.forEach((name) => {
        // Create a new img element
        var newImg = document.createElement("img");

        // Set the src for the new img
        newImg.setAttribute("src", './images/' + name);
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        // Add an onclick event to the new img
        newImg.onclick = function() {
            // Handle the click event here...
            console.log(this);
            this.classList.add("animation" + randomNumber);
            this.addEventListener('animationend', function() {
                this.remove();
                play();
            })
        };

        var newDiv = document.createElement("div");
        newDiv.classList.add("frame");
        newDiv.appendChild(newImg);

        // Add the new img to the content div
        content.appendChild(newDiv);
    });
}

function play() {
    var video = document.getElementById("video");
    video.play();
}

