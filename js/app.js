function getInformation(){
    var vertNumber = document.getElementById("inputText").value;
    var configWait = document.getElementById("inputVectors");

    //Verification variable
    if (isNaN(vertNumber) || vertNumber == ""){
        alert("Input must be a number.");
        return -1;
    }
    else{
        //Show new section and hide others
        configWait.style.display = "none";
        var temp = document.getElementsByTagName("template")[0];
        var clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
}