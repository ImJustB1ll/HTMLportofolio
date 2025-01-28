const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Game Enthusiast";
    }, 0);
    setTimeout(() => {
        text.textContent = "IT Enthusiast";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Front-End Dev";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Game Designer";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Game Developer";
    }, 16000);
}

textLoad();
setInterval(textLoad, 20000);