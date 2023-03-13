// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

const home_video = document.getElementById("home_video");
console.log(home_video)
home_video.play();

var text = "Welcome!";
var delay = 100;

function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(function() { typeWriter(text, i) }, delay);
  }
}

typeWriter(text, 0);