function calculateBmi(event){
    //Getting the values from input fields
    let height = parseFloat(document.getElementById("bodyHeight").value /100);// to convert the value in meters I did /100
    let weight = parseFloat(document.querySelector("bodyWeight").value);
    let lastname = document.getElementById("lastName").value;
    let firstname = document.getElementById("firstName").value;
    let date = document.getElementById("birthDate").value;
    let gender = document.querySelector('input[name="gender]:checked');

    //checking if the valuees exist and are valid numbers
    if(height && weight){
        let bmi = weight / (height*height);
        let bmiLevel = Math.round(bmi);
        let output = `${lastname} ${firstname}, born on the ${date} with the gender${gender.value}, your BMI level is: ${bmiLevel}.`;
        //check the BMI level and update the message accordingly
        if(bmiLevel >= 35){
            output+="You suffer from Adipositas Grad 2. We recommend you see a doctor!";
        }else if(bmiLevel>=30){
            output+="You have Adipositas Grad 1.";
        }else if(bmiLevel >=25){
            output+="You are Overweight.";
        }else if(bmiLevel <25){
            output+= "You have a healthy weight";
        }

        //Display the result
        document.getElementById("result").innerHTML = output;
    }else{
        //handle invalid input
        document.getElementById("result").innerHTML = "please enter valid height and weight.";
    }
}
    

let buttonElement = document.querySelector("#button");
    buttonElement.addEventListener("click", calculateBmi);
