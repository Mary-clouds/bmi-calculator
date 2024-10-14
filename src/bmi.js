function calculateBmi(event){
    //Getting the values from input fields
    let height = parseFloat(document.getElementById("bodyHeight").value /100);// to convert the value in meters I did /100
    let weight = parseFloat(document.querySelector("bodyWeight").value);
    let lastname = document.getElementById("lastName").value;
    let firstname = document.getElementById("firstName").value;
    let date = document.getElementById("birthDate").value;
    let gender = document.getElementById("gender").value;
}


let buttonElement = document.querySelector("#button");
    buttonElement.addEventListener("click", calculateBmi);
