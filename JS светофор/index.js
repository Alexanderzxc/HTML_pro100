let lights = document.querySelectorAll('.light')
let currentLight = 0;

function toggleLights() {
    lights[currentLight].classList.remove('active')
    
    currentLight = (currentLight + 1) % lights.length;

    lights[currentLight].classList.add('active');
}