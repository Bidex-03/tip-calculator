"use strict";

// Selecting elements
const billInput = document.querySelector("#Bill");
const tipBtn = document.querySelectorAll(".tip-btn");
const tipKeys = document.querySelectorAll(".tip-key");
const customTipInput = document.querySelector(".custom-tip");
const peopleInput = document.querySelector("#People");
const tipValue = document.querySelector("#tip-value");
const totalValue = document.querySelector("#total-value");
const resetBtn = document.querySelector("#reset");



tipValue.textContent = "$" + (0.0).toFixed(2);
totalValue.textContent = "$" + (0.0).toFixed(2)

billInput.addEventListener("input", (billInputValue) => {
    billInputValue = Number(billInput.value);
    console.log(billInputValue);
})

peopleInput.addEventListener("input", (peopleInputValue) => {
    peopleInputValue = Number(peopleInput.value);
    console.log(peopleInputValue);
})


// tipKeys.forEach((tipKey) => {
//     tipKey.addEventListener("click", handleClick);
//     });

tipKeys.forEach(tipKey => {
    tipKey.classList.remove("active-tip");
    tipKey.addEventListener("click", (e) => {
        if (e.target.textContent === tipKey.textContent) {
            e.target.classList.add("active-tip");
            console.log(billInput.value * (parseFloat(e.target.textContent)) / 100);
            tipValue.innerHTML = "$" + (billInput.value * (parseFloat(e.target.textContent)) / 100).toFixed(2);
        }
    })
})





















// // Adding event listeners
// billInput.addEventListener("input", calculateTip);
// tipKeys.forEach((tipKey) => {
//     tipKey.addEventListener("click", calculateTip);
//     });
// customTipInput.addEventListener("input", calculateTip);
// peopleInput.addEventListener("input", calculateTip);
// resetBtn.addEventListener("click", reset);