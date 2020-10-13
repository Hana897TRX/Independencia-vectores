let matrix;
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

function getInformation(){
    let vertNumber = document.getElementById("inputText").value;
    let configWait = document.getElementById("inputVectors");
    let dimension = GetOptionRX();
    console.log(dimension);
    //Verification variable
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

function Create2DArray(x, y){
    matrix = new Array(x);
    for(var i = 0; i < matrix.length; i++)
        matrix[i] = new Array(x);
}

function GenerateInputText(col, rows){
    Create2DArray(col, rows);
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
            let tempInput = addCol + "tempText" + number.toString() + addInput2;
            supPosition.innerHTML += addSpace;
            supPosition.innerHTML += tempInput;
            supPosition.innerHTML += addSpace;
            supPosition.innerHTML += addSpace;
            matrix[y][x] = "tempText" + number.toString();
                console.debug(matrix[y][x]);
            number++;
        }
    }
}