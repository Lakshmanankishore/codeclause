const menubtn = document.querySelector(".menubtn");
const navg = document.querySelector(".navg");
menubtn.addEventListener("click", () => {
    menubtn.classList.toggle("active");
    navg.classList.toggle("active");
});