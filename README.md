# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Your users should be able to:

-   Complete the form with their details
-   Receive form validation messages if:
    -   Any field is missed
    -   The email address is not formatted correctly
    -   The avatar upload is too big or the wrong image format
-   Complete the form only using their keyboard
-   Have inputs, form field hints, and error messages announced on their screen reader
-   See the generated conference ticket when they successfully submit the form
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

-   Solution URL: [Github repo](https://github.com/S4V10N/interactive-pricing-component-main)
-   Live Site URL: [Live preview](https://interactive-pricing-component-main-bice.vercel.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   SASS custom properties
-   Flexbox
-   JS

### What I learned

i expanded my knowledge of event listeners in Js as well as better coding practices without breaking my back or reinventing the wheel.

To see how you can add code snippets, see below:

```sass
.card__title
    display: flex
    position: absolute
    top: 2rem
    left: 2rem
    gap: 1rem
    img
        height: max-content
        width: 3rem
    .text
        flex-direction: column
        align-items: start
        display: flex
        gap: 1rem
        h2
            color: var(--WHITE)
        p
            margin-bottom: 0
            font-size: 1.6rem
```

```js
let discountApplied = false;

applyDiscount.addEventListener("click", () => {
    if (discountApplied) return;

    let base = parseFloat(price.textContent);
    let discounted = base - (base * 25) / 100;
    price.textContent = discounted.toFixed(2);

    discountApplied = true;
});
```

## Author

-   Website [Didia praise](https://savion-dev.vercel.app)
-   Frontend Mentor [S4V10N](https://www.frontendmentor.io/profile/S4V10N)
-   Twitter [Dev Savion](https://x.com/dev_savion?s=21)
