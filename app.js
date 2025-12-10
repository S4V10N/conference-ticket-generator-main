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
const uploadImg = document.querySelector("#images");
const previewImg = document.querySelector(".upload img");
const titleParagraph = document.querySelector(".text p");
const ticketImg = document.querySelector(".project");

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
        let code = Math.round(Math.random() * 10);
        inviteCode += code + "";
        console.log(code);
        console.log(inviteCode);
    }
    ticketCode.innerHTML = "#" + inviteCode;
};

const swap = () => {
    ticket.classList.add("hidden");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        ticket.classList.remove("hidden");
        form.classList.add("hidden");
        let userName = name.value;
        let userEmail = email.value;
        let username = uName.value;
        updateText(userName, userEmail, username);
    });
    errorMsg.forEach((msg) => {
        msg.classList.add("hidden");
    });
};
swap();

email.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const str = email.value.trim();
    if (!regex.test(str) || str.length < 1 || str == "") {
        email.classList.add("error-state");
        errorMsg[2].classList.remove("hidden");
    } else {
        email.classList.remove("error-state");
        errorMsg[2].classList.add("hidden");
    }
});

name.addEventListener("input", () => {
    const str = name.value.trim();
    if (str.length < 1 || str == "") {
        name.classList.add("error-state");
        errorMsg[1].classList.remove("hidden");
    } else {
        name.classList.remove("error-state");
        errorMsg[1].classList.add("hidden");
    }
});
uName.addEventListener("input", () => {
    const regex = /^@[a-zA-Z0-9_\\-]{3,15}$/;
    const str = uName.value.trim();
    if (!regex.test(str) || str.length < 1 || str == "") {
        uName.classList.add("error-state");
        errorMsg[3].classList.remove("hidden");
    } else {
        uName.classList.remove("error-state");
        errorMsg[3].classList.add("hidden");
    }
});

let allowOpen = true;

upload.onclick = () => {
    if (allowOpen) {
        uploadImg.click();
    }
};

uploadImg.addEventListener("change", sizeValidation);

function sizeValidation(e) {
    const file = e.target.files[0];
    const maxSizeKb = 500;
    const maxSizeInBytes = maxSizeKb * 1024;

    upload.classList.remove("no-padding");

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png"];

    // ❌ INVALID FILE
    if (!allowedTypes.includes(file.type) || file.size > maxSizeInBytes) {
        errorMsg[0].classList.remove("hidden");
        previewImg.src = ""; // remove old preview
        previewImg.classList.remove("preview");
        allowOpen = true; // still allow reopening
        return; // 🔥 STOP HERE
    }

    // ✅ VALID FILE
    errorMsg[0].classList.add("hidden");
    allowOpen = true;

    const reader = new FileReader();
    reader.onload = (ev) => {
        previewImg.src = ev.target.result;
        previewImg.classList.add("preview");
        upload.classList.add("no-padding");
    };
    reader.readAsDataURL(file);
}
