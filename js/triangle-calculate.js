function triangleCalculate() {
  // triangle's base
  const triangleBase = document.getElementById("triangle-base");
  const baseValue = triangleBase.value;
  const base = parseFloat(baseValue);

  //   triangle's height
  const triangleHeight = document.getElementById("triangle-height");
  const heightValue = triangleHeight.value;
  const height = parseFloat(heightValue);

  //   calculate triangle's area
  const area = 0.5 * base * height;
  console.log(area);

  //display area
  const getTriangleArea = document.getElementById("triangle-area");
  getTriangleArea.innerText = area;
}

//rectangular calculator
function rectangleCalculate() {
  const width = getInputValueById("rectangle-width");
  console.log("Rectangle width: ", width);
  const lenght = getInputValueById("rectangle-lenght");
  console.log("Rectangle lenght: ", lenght);

  const area = 0.5 * width * lenght;
  console.log("Area of rectangle: ", area);

  const displayArea = setInnerTextById("rectangle-area",area);

}
//parallelogram calculator
function parallelogramCalculate() {
  const base = getInputValueById("para-base");
  console.log("Parallelogram base: ", base);
  const height = getInputValueById("para-height");
  console.log("Parallelogram height: ", height);

  const area = base * height;
  console.log("Area of parallelogram: ", area);

  const displayArea = setInnerTextById("para-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValue = inputField.value;
  const input = parseFloat(inputValue);
  return input;
}
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
