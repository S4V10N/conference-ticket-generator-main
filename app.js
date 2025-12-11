const ticket = document.querySelector("#ticket");
const form = document.querySelector("#form");
const errorMsg = document.querySelectorAll(".error");
const email = document.querySelector("#email");
const name = document.getElementById("fName");
const uName = document.getElementById("username");
const ticketName = document.querySelector(".fullName");
const ticketCode = document.querySelector(".code");
const ticketUsername = document.querySelector(".username");
const titleText = document.querySelector(".text h1");
const upload = document.querySelector(".upload");
const ticketImg = document.querySelector(".profile img");

const uploadImg = document.querySelector("#images");
const previewImg = document.querySelector(".upload img");
const titleParagraph = document.querySelector(".text p");

uploadImg.addEventListener("change", sizeValidation);

function sizeValidation(e) {
    const file = e.target.files[0];
    const maxSizeKb = 500;
    const maxSizeInBytes = maxSizeKb * 1024;

    const allowedTypes = ["image/jpeg", "image/png"];
    const msg = document.querySelector(".msg");

    upload.classList.remove("no-padding");

    if (!file) {
        errorMsg[0].classList.add("hidden");
        msg.classList.add("hidden");
        previewImg.src = "";
        ticketImg.src = "";
        previewImg.classList.remove("preview");
        return;
    }

    if (!allowedTypes.includes(file.type) || file.size > maxSizeInBytes) {
        errorMsg[0].classList.remove("hidden");
        msg.classList.add("hidden");

        previewImg.src = "";
        previewImg.classList.remove("preview");
        ticketImg.src = "";

        allowOpen = true;
        return;
    }

    errorMsg[0].classList.add("hidden");
    msg.classList.remove("hidden");

    const reader = new FileReader();
    reader.onload = (ev) => {
        const imgURL = ev.target.result;

        previewImg.src = imgURL;
        previewImg.classList.add("preview");
        upload.classList.add("no-padding");

        ticketImg.src = imgURL;
    };

    reader.readAsDataURL(file);

    allowOpen = true;
}

email.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const str = email.value.trim();

    if (!regex.test(str) || str.length < 1) {
        email.classList.add("error-state");
        errorMsg[2].classList.remove("hidden");
    } else {
        email.classList.remove("error-state");
        errorMsg[2].classList.add("hidden");
    }
});

name.addEventListener("input", () => {
    const str = name.value.trim();

    if (str.length < 1) {
        name.classList.add("error-state");
        errorMsg[1].classList.remove("hidden");
    } else {
        name.classList.remove("error-state");
        errorMsg[1].classList.add("hidden");
    }
});

uName.addEventListener("input", () => {
    const regex = /^@[a-zA-Z0-9_\-]{3,15}$/;
    const str = uName.value.trim();

    if (!regex.test(str)) {
        uName.classList.add("error-state");
        errorMsg[3].classList.remove("hidden");
    } else {
        uName.classList.remove("error-state");
        errorMsg[3].classList.add("hidden");
    }
});

const swap = () => {
    ticket.classList.add("hidden");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const hasErrors = [...errorMsg].some(
            (msg) => !msg.classList.contains("hidden")
        );

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            uName.value.trim() === "" ||
            previewImg.src === "" ||
            previewImg.src.includes("blank")
        ) {
            return;
        }

        if (hasErrors) return;
        ticket.classList.remove("hidden");
        form.classList.add("hidden");

        updateText(name.value, email.value, uName.value);
    });

    errorMsg.forEach((msg) => msg.classList.add("hidden"));
};

swap();

const updateText = (user, address, username) => {
    const successMessageOne = `Congrats, ${user}`;
    const successMessageTwo = `Your ticket is ready. We've emailed your ticket to
        ${address}
        and will send updates in the run up to the event.`;

    titleText.innerHTML = successMessageOne;
    titleParagraph.innerHTML = successMessageTwo;

    ticketName.innerHTML = user;
    ticketUsername.innerHTML = username;

    let inviteCode = "";
    for (let i = 0; i < 5; i++) {
        inviteCode += Math.floor(Math.random() * 10);
    }

    ticketCode.innerHTML = "#" + inviteCode;
};
