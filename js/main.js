/* ========== Navigation =========== */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    menu.classList.add("show");
});

close.addEventListener("click", () => {
    menu.classList.remove("show");
});

/* ========== User Form =========== */
const formWrapper = document.querySelector(".form-wrapper");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons = [...document.querySelectorAll(".form-icon")];
const spans = [...document.querySelectorAll(".form-box .top span")];
const userForm = document.querySelector(".user-form");

document.querySelector(".user-icon").onclick = () => {
    userForm.classList.add("show");
};

document.querySelector(".close-form").onclick = () => {
    userForm.classList.remove("show");
};

spans.map((span) => {
    span.addEventListener("click", (e) => {
        const color = e.target.dataset.id;
        formWrapper.classList.toggle("active");
        userForm.classList.toggle("active");
        document.querySelector(":root").style.setProperty("--custom", color);
    });
});

Array.from(inputs).map((input) => {
    icons.map((icon) => {
        icon.innerHTML = `<img src="./images/eye.svg" alt="" />`;

        icon.addEventListener("click", () => {
            const type = input.getAttribute("type");
            if (type === "password") {
                input.setAttribute("type", "text");
                icon.innerHTML = `<img src="./images/hide.svg" alt="" />`;
            } else if (type === "text") {
                input.setAttribute("type", "password");
                icon.innerHTML = `<img src="./images/eye.svg" alt="" />`;
            }
        });
    });
});