let changeColorBtn = document.getElementById("change-color-btn");

const colorBox = document.getElementById('color-box');

let hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function getCharacter(index) {
    return hexCharacters[index];
}//#endregio

function getRandomIndex() {
    return Math.floor(Math.random() * hexCharacters.length);
}

function getRandomCode() {
    let hexColor = "#";
    for (let position = 0; position < 6; position ++) {
        hexColor += getCharacter(getRandomIndex());
    }
    return hexColor;
}

console.log(getRandomCode());

changeColorBtn.addEventListener("click", function() {
    colorBox.style.backgroundColor = getRandomCode();
});


