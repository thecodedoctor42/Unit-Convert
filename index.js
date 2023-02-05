const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#number-input")
const lengthValues = document.querySelector("#length-values")
const volumeValues = document.querySelector("#volume-values")
const massValues = document.querySelector("#mass-values")

convertBtn.addEventListener("click", function() {
    render(3.281, "meters", "feet", lengthValues)
    render(0.264, "litres", "gallons", volumeValues)
    render(2.204, "kilograms", "pounds", massValues)
})

function render(ratio, unit1, unit2, htmlString) {
    const number = inputEl.value
    let conversion1 = (number*ratio).toFixed(2)
    let conversion2 = (number/ratio).toFixed(2)
    htmlString.innerHTML = `${number} ${unit1} = ${conversion1} ${unit2} | ${number} ${unit2} = ${conversion2} ${unit1}`
}


const darkMode = document.querySelector("#change")
const body = document.querySelector("body")
const resultscontainer = document.querySelector("#results-container")
const measurementContainers = document.querySelectorAll(".measurement-container")
const valuesControls = document.querySelectorAll(".control-value")


darkMode.addEventListener("click", function() {
    if( body.classList.contains ( "dark" ) ) {
        body.classList.toggle( "dark" );
        darkMode.innerHTML = "OFF";
        change()
    } else {
        body.classList.toggle( "dark" );
        darkMode.innerHTML = "ON";
        change()
    }
})

function change() {
    resultscontainer.classList.toggle("dark-results-style")
    measurementContainers.forEach((element) => {
        element.classList.toggle("dark-measurement-style")
        element.classList.toggle("measurement-style")
    })
    valuesControls.forEach((element) => {
        element.classList.toggle("dark-values")
        element.classList.toggle("values")
    })
}