let matrix = [];

function getInformation(){
    let vertNumber = document.getElementById("inputText").value;
    let configWait = document.getElementById("inputVectors");

    //Verification variable
    if (isNaN(vertNumber) || vertNumber == ""){
        alert("Input must be a number.");
        return -1;
    }
    else{
        //Show new section and hide others
        configWait.style.display = "none";
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
        GenerateInputText(2, 2);
    }
}

function GenerateInputText(col, rows){
    let addSpace = '<br>';
    let addRow = '<div id="row" class="row"></div>';
    let addCol = '<div class="col"></div>';
    let addInput = '<input id="inputText" type="text" class="form-control">';
    let position = document.getElementById("vectorsContent");
    for(var y = 0; y < rows; y++){
        let temprow = addRow;
        temprow.replace("row", "row" + y.toString());
        position.innerHTML += temprow;
        
        //let positionCol = document.getElementById("row" + x);
        for(var x = 0; x < col; x++){
            let tempInput = addInput;
            position.innerHTML += addSpace;
            tempInput.replace("inputText", "inputText" + x.toString());
            position.innerHTML += addCol;
            position.innerHTML += tempInput;
        }
    }
}