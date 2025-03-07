function makeBoxes(inputNum){
    const container = document.querySelector(".container");//constant referencing the container
    const boxAll = document.querySelectorAll('.box');

    boxAll.forEach(box => {
        box.remove();//start with empty grid
    });
    let boxTotal = inputNum*inputNum;//total boxes for the grid
    let boxRatio = (1/inputNum*100)+'%';//size each box to fit in a grid
    for (let i = 1; i <= boxTotal; i++){//cycle through total to make each div box
        let boxes = document.createElement("div");//assign box to a new div
        boxes.classList.add("box");//assign box class to box
        container.appendChild(boxes);//container adopts box
        //boxes.textContent = i;//display number on box
        boxes.style.width = boxRatio;//set box size
        boxes.style.height = '0';
        boxes.style.paddingBottom = boxRatio;
    }   
    getBoxes().forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        });
    });
}
function getBoxes(){
    return document.querySelectorAll('.box');
}

const startButton = document.getElementById('start');//upon clicking start button
startButton.addEventListener('click', function(){
    let boxNum = Number(prompt("Enter the size of grid", "Integers, 1-100"));//stores user input as an integer
    if (Number.isInteger(boxNum) == true && 0 < boxNum && boxNum < 101) {//tests if the input meets criteria
        makeBoxes(boxNum);
    }
    else {
        alert('ERROR');//input error
    }
});



