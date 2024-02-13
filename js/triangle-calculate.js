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

  const getTriangleArea = document.getElementById("triangle-area");
  getTriangleArea.innerText = area;
  
}
