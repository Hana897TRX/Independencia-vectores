//Components
const numVectors = document.getElementById("inputText");
const btnAccept = document.getElementById("btnAccept");
const inputVectors = document.getElementById("inputVectors");
let contVectors = document.getElementById("contVectors");

let number = 0;
let active = false;

btnAccept.addEventListener("click", getInformation, false);

function GetOptionRX(){
    let r2 = document.getElementById("r2");
    let r3 = document.getElementById("r3");
    let r4 = document.getElementById("r4");

    console.debug(r2);

    if(r2)
        return 2;
    else if(r3)
        return 3;
    else if(r4)
        return 4;
    else
        return -3;
}

function removeTextBox(){
    var vectorsContent = document.getElementById("vectorsContent");
    var btnComprobate = document.getElementById("btnComprobate");
    var controlVectors = document.getElementById("controlVectors");

    if(active){
        for(var i = 0; i < number; i++){
            var element = document.getElementById("textBox" + i.toString());
            element.parentNode.removeChild(element);
        }

        number = 0;
        
        //Remove previous
        vectorsContent.parentNode.removeChild(vectorsContent);
        btnComprobate.parentNode.removeChild(btnComprobate);

        //Add new Parts
        controlVectors.innerHTML += '<div id="vectorsContent" class="container-fluid"></div>';
        controlVectors.innerHTML += '<button id="btnComprobate"type="button" class="btn btn-primary btn-lg btn-block">Comprobar linealidad.</button>';
        
        //Hide Content
        inputVectors.style.display = 'contents';
        contVectors.style.display = 'none';
    }
}

function getInformation() {
    console.log(document.getElementById("inputText"));
    let vertNumber = document.getElementById("inputText");
    //inputVectors = document.querySelector("inputVectors");
    //contVectors = document.querySelector("contVectors");
    let dimension = GetOptionRX();
    //console.log(dimension);

    //Verification part
    if (numVectors.value == "" || numVectors.value.match(/[A-Z][a-z]/g)){
        alert("Input must be a number.");
        return -1;
    }
    else if(dimension == -3){
        alert("You must select Vector dimension.");
        return -2;
    }
    else{
        //Show new section and hide others
        if(!active){
            inputVectors.style.display = "none";
            let temp = document.getElementsByTagName("template")[0];
            let clon = temp.content.cloneNode(true);
            document.body.appendChild(clon);
            active = true;
        }
        GenerateInputText(dimension, parseInt(vertNumber.value));
        return 0;
    }
}

function GenerateInputText(col, rows) {
    inputVectors.isVisible = false;
    contVectors.isVisible = true;
    let addSpace = '<br>';
    let addRow1 = '<div id="';
    let addRow2 = '" class="row"></div>'
    let addCol = '<div class="col"><input id="';
    let addInput2 = '" type="text" class="form-control"></div>';
    let position = document.getElementById("vectorsContent");
    for(var y = 0; y < rows; y++){
        let temprow = addRow1 + "row" + y.toString() + addRow2;
        position.innerHTML += temprow;
        let supPosition = document.getElementById("row" + y.toString())

        for(var x = 0; x < col; x++){
            let tempInput = addCol + "textBox" + number.toString() + addInput2;
            supPosition.innerHTML += addSpace;
            supPosition.innerHTML += tempInput;
            supPosition.innerHTML += addSpace;
            supPosition.innerHTML += addSpace;
            number++;
        }
    }
}

function CalculateVectors(){
    
}
