const typingText = document.querySelector('.sec-text');

let myArray =
["Desenvolvedor Front-End", "Estudante", "Rato De Academia"];

let arrayindex = 1;

let maxLength = 0;
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i].length > maxLength) {
    maxLength = myArray[i].length;
  }
}
const wrapper = document.querySelector('.wrapper');
wrapper.style.width = `${maxLength * 4}ch`;

function textReplace(){
    setInterval(timer, 5000);
    function timer(){
        if(arrayindex < myArray.length){
            typingText.innerHTML = myArray[arrayindex];
            arrayindex = arrayindex + 1;
        }
        else{
            arrayindex = 0;
            typingText.innerHTML = myArray[arrayindex];
            arrayindex = arrayindex + 1;
        }
    }
}
textReplace();