let number = 0;
let active = false;

function GetOptionRX(){
    if(document.getElementById("r2").checked)
        return 2;
    else if(document.getElementById("r3").checked)
        return 3;
    else if(document.getElementById("r4").checked)
        return 4;
    else
        return -3;
}

function removeTextBox(){
    if(active){
        for(var i = 0; i < number; i++){
            var element = document.getElementById("textBox" + i.toString());
            element.parentNode.removeChild(element);
        }
        number = 0;
        vectorsContent.parentNode.removeChild(vectorsContent);
        btnComprobate.parentNode.removeChild(btnComprobate);
        controlVectors.innerHTML += '<div id="vectorsContent" class="container-fluid"></div>';
        controlVectors.innerHTML += '<button id="btnComprobate"type="button" class="btn btn-primary btn-lg btn-block">Comprobar linealidad.</button>';
        inputVectors.style.display = 'contents';
        contVectors.style.display = 'none';
    }
}

function getInformation(){
    let vertNumber = document.getElementById("inputText").value;
    let configWait = document.getElementById("inputVectors");
    let dimension = GetOptionRX();
    console.log(dimension);

    //Verification part
    if (isNaN(vertNumber) || vertNumber == ""){
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
            configWait.style.display = "none";
            let temp = document.getElementsByTagName("template")[0];
            let clon = temp.content.cloneNode(true);
            document.body.appendChild(clon);
            active = true;
        }
        GenerateInputText(dimension, vertNumber);
    }
}

function GenerateInputText(col, rows){
    inputVectors.style.display = 'none';
    contVectors.style.display = 'contents';
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