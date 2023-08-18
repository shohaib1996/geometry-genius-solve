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
    if(isNaN(base) || isNaN(height)){
        alert('Please provide a number');
        return;
    }
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle', area)

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
    addToCalculationEntry('rectangle', area);

}
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please provide a Number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('parallelogram', area);

}

function calculateEllipseArea(){
    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');
    const area = (3.14 * majorRadius * minorRadius).toFixed(2);
    setElementInnerText('ellipse-area', area);
    addToCalculationEntry('Ellipse', area)
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

function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-center');
    p.classList.add('my-5');
    p.innerHTML = `${count + 1}.   ${areaType}   ${area}  cm<sup>2</sup>  <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p)

}