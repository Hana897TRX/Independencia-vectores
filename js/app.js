function getInformation(){
    var vertNumber = document.getElementById("inputText").value;

    //Verification variable
    if (isNaN(vertNumber) || vertNumber == ""){
        alert("Input must be a number.");
        //return -1;
    }
    else{
        //Code remplace
        document.getElementById("inputVectors").innerHTML='<object type="text/html" data="/html/load_vectors.html" ></object>';
    }
}