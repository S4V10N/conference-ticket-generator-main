const ticket = document.querySelector("#ticket");
const form = document.querySelector("#form");
const email = document.querySelector("#email").value;
const name = document.getElementById("fName").value;
const successMessageOne = `Congrats, ${name}`;
const successMessageTwo = `Your ticket is ready. We've emailed your ticket to
        ${email}
        and will send updates in the run up to the event.`;
const titleText = document.querySelector(".text h1");
const titleParagraph = document.querySelector(".text p");

const swap = () => {
    ticket.classList.add("hidden");
    form.addEventListener("submit", () => {
        ticket.classList.remove("hidden");
    });
};
swap();

const updateText = () => {
    titleText.innerHTML = successMessageOne;
    titleParagraph.innerHTML = successMessageTwo;
};
