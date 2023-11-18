import {addContent} from "./addContent.js";

export function bring() {
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

export function play() {
    var video = document.getElementById("video");
    video.play();
}

