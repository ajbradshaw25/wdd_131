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
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);