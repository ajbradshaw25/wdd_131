let new_array = Array.map(function callback( currentValue[, index[, array]]) {
    // return element for new array
})[, thisArg]

// example 1
const steps = ["one", "two", "three"];
const listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
  }
});