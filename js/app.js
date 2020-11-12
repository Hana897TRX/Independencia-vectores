const configWait = document.getElementById("inputVectors");
let number = 0;
let active = false;
let dimension = 0;
let vertNumber = 0;

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
        controlVectors.innerHTML += '<button id="btnComprobate"type="button" onClick="CalculateVectors()" class="btn btn-primary btn-lg btn-block">Comprobar linealidad.</button>';
        inputVectors.style.display = 'contents';
        contVectors.style.display = 'none';
    }
}

function getInformation(){
    vertNumber = parseInt(document.getElementById("inputText").value);
    dimension = GetOptionRX();
    console.log(dimension);

    //Verification part
    if (isNaN(vertNumber) || vertNumber == "") {
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

function GetVectorValue(x, y){
    var temp = document.getElementById("textBox" + ((y * dimension) + x).toString()).value;
    var regex = new RegExp('/');

    if(temp.match(regex)){
        var ar = temp.split("/");
        console.log(ar);
        return parseFloat(ar[0]) / parseFloat(ar[1]);
    }
    return parseFloat(document.getElementById("textBox" + ((y * dimension) + x).toString()).value);
}

function SetVectorValue(x, y, value){
    document.getElementById("textBox" + ((y * dimension) + x).toString()).value = value.toString();
}

function CalculateVectors(){
    console.log("Run vector calc");
    if(vertNumber == 1 || vertNumber == dimension || vertNumber < dimension){
        for(var y = 0; y < vertNumber; y++){

            var z = 0;
            while(z < dimension - 1 && GetVectorValue(z, y) == 0){
                z++
            }
            
            //Matrix reduction
            if(GetVectorValue(z, y) != 0){
                DividirFila(GetVectorValue(z, y), z, y);
                for(var topY = y -1; topY >= 0; topY--){
                    DeleteZeroUp(z, topY, y);
                }
            }
        }

        //Count pivotes
        var pivotes = [];
        for(var y = 0; y < vertNumber; y++){
            for(var z = 0; z < dimension; z++){
                if(GetVectorValue(z, y) != 0){
                    pivotes.push(z);
                    break;
                }
            }
        }

        //Validation and result
        if(vertNumber == 1 || dimension == 1 || pivotes.length == dimension){
            alert("<Vectores Independientes>.");
            //Send message to user. "<Independientes>"
        }
        else{
            alert("<Vectores dependientes>.");
            //Send message to user. "<Dependientes>"
        }
        //Debug
        console.log("Program finished correctly");
    }
    else{
        alert("<Vectores dependientes>, el número de vectores es mayor a la dimension.");
        console.log("Something happend");
    }
}

function DividirFila(_num, _x, _y){
    for(var x = _x; x < dimension; x++){
        SetVectorValue(x, _y, GetVectorValue(x, _y) / _num);
    }

    for(var movY = _y + 1; movY < vertNumber; movY++){
        DeleteZeroBelow(_x, movY, _y);
    }
}

//-These functions can be reduced
function DeleteZeroBelow(_x, _y, _topY){
    
    var num = GetVectorValue(_x, _y);
    for(var x = 0; x < dimension; x++){
        SetVectorValue(x, _y, GetVectorValue(x, _y) + GetVectorValue(x, _topY) * num * -1);
    }
}

function DeleteZeroUp(_x, _y, _botY){

    var num = GetVectorValue(_x, _y);
    for(var x = 0; x < dimension; x++){
        SetVectorValue(x, _y, GetVectorValue(x, _y) + GetVectorValue(x, _botY) * num * -1);
    }
}
//-