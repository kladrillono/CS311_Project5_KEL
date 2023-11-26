function playGame(){
    let name = document.getElementById("inputName").value;
    let adjective = document.getElementById("inputAdjective").value;
    let temperature = document.getElementById("inputTemperature").value;
    let color = document.getElementById("inputColor").value;
    let animal = document.getElementById("inputAnimal").value;
    let celebrity = document.getElementById("inputCelebrity").value;
    let country = document.getElementById("inputCountry").value;
    let food = document.getElementById("inputFood").value;
    let month = document.getElementById("inputMonth").value;
    let sport = document.getElementById("inputSport").value;

    let resultLib = "Hey " + name + " , I had a " + adjective + " dream lastnight! It was a " + temperature + " day in " + month + ". I was riding on a " + color + 
    " " + animal + " across " + country + "." + " Then I shared " + food + " with " + celebrity + ", afterwards we watched " + sport + " together!";

    document.getElementById('theLib').innerHTML = resultLib;

    hideInterface();
    showInterface();
}

function hideInterface(){
    let prompt = document.getElementById("container");
    prompt.style.display = 'none';
}

function showInterface(){
    let x = document.getElementById("container2");
    x.style.display = 'block';
}

function hideSecondInterface(){
    let prompt = document.getElementById("container2");
    prompt.style.display = 'none';
}

function showOriginalInterface(){
    let x = document.getElementById("container");
    x.style.display = 'block';

    let name = document.getElementById("inputName").value = "";
    let adjective = document.getElementById("inputAdjective").value = "";
    let temperature = document.getElementById("inputTemperature").value = "";
    let color = document.getElementById("inputColor").value = "";
    let animal = document.getElementById("inputAnimal").value = "";
    let celebrity = document.getElementById("inputCelebrity").value = "";
    let country = document.getElementById("inputCountry").value = "";
    let food = document.getElementById("inputFood").value = "";
    let month = document.getElementById("inputMonth").value = "";
    let sport = document.getElementById("inputSport").value = "";

    hideSecondInterface();
}