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
        GenerateInputText(3, 3);
    }
}

function GenerateInputText(col, rows){
    let number = 0;
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
            number++;
        }
    }
}