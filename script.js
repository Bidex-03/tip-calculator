"use strict";

// Selecting elements
const billInput = document.querySelector("#Bill");
const tipBtn = document.querySelectorAll(".tip-btn");
const tipKeys = document.querySelectorAll(".tip-key");
const customTipInput = document.querySelector(".custom-tip");
const peopleInput = document.querySelector("#People");
const containerTipValue = document.querySelector("#tip-value");
const containerTotalValue = document.querySelector("#total-value");
const resetBtn = document.querySelector("#reset");



let billValue = 0.0;
let peopleValue = 1;
let tipPercent = 0.15;
containerTipValue.textContent = "$" + (0.0).toFixed(2);
containerTotalValue.textContent = "$" + (0.0).toFixed(2);


billInput.addEventListener("input", billInputFunc);
peopleInput.addEventListener("input", peopleInputFunc);
tipKeys.forEach(tipVal => {
    tipVal.addEventListener("click", tipClick);
});
customTipInput.addEventListener("input", customTipInputFunc);
resetBtn.addEventListener("click", resetBtnFunc);



function billInputFunc() {
    billValue = parseFloat(billInput.value);
    calcTipFunc();
}

function peopleInputFunc() {
    peopleValue = parseFloat(peopleInput.value);
    calcTipFunc();
}

function tipClick(event) {
    tipKeys.forEach(tipVal => {
        tipVal.classList.remove("active-tip");
        if(event.target.textContent === tipVal.textContent){
            tipVal.classList.add("active-tip");
            tipPercent = parseFloat(tipVal.textContent) / 100;
        }
    });
    calcTipFunc();
}

function calcTipFunc() {
    if (peopleValue >= 1) {
        let tip = (billValue * tipPercent) / peopleValue;
        let total = (billValue / peopleValue) + tip;
        containerTipValue.textContent = "$" + tip.toFixed(2);
        containerTotalValue.textContent = "$" + total.toFixed(2);
        resetBtn.disabled = false;
    }
}

function customTipInputFunc() {
    containerTipValue = parseFloat(customTipInput.value / 100);
    tipKeys.forEach(tipVal => {
        tipVal.classList.remove("active-tip");
    })
    calcTipFunc()
}

function resetBtnFunc() {
    billInput.value = "0"
    billInputFunc()
    peopleInput.value = "0"
    peopleInputFunc()
    customTipInput.value = ""
}