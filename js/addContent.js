import { play } from './js.js';

export function addContent(data) {

    const content = document.getElementById("photos");

    data.forEach((name) => {
        // Create a new img element
        const img = document.createElement("img");
        // Set the src for the new img
        img.setAttribute("src", './images/' + name);
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        // Add an onclick event to the new img
        img.onclick = function() {
            // Handle the click event here...
            this.classList.add("animation" + randomNumber);
            this.addEventListener('animationend', function() {
                this.remove();
                play();
            })
        };

        const picture = document.createElement("picture");

        const sourceSmall = document.createElement("source");
        sourceSmall.setAttribute("srcset", './images/verySmall/' + name);
        sourceSmall.setAttribute("media", "(max-width: 600px)");

        const sourceBig = document.createElement("source");
        sourceBig.setAttribute("srcset", './images/small/' + name);
        sourceBig.setAttribute("media", "(min-width: 601px)");

        picture.appendChild(sourceSmall);
        picture.appendChild(sourceBig);
        picture.appendChild(img);

        const frameDiv = document.createElement("div");
        frameDiv.classList.add("frame");
        frameDiv.appendChild(picture);

        // Add the new img to the content div
        content.appendChild(frameDiv);
    });
}