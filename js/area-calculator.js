function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    baseField.value = '';

    const heightField = document.getElementById('triangle-height')
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    heightField.value = '';
    const area = 0.5 * base * height;
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}
function calculateRectangleArea(){
    const widthField= document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    widthField.value = '';

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    lengthField.value = '';

    const area = width * length;
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function calculateEllipseArea(){
    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');
    const area = (3.14 * majorRadius * minorRadius).toFixed(2);
    setElementInnerText('ellipse-area', area)
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseInt(inputValueText);
    inputField.value = '';
    return value;
}
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}
