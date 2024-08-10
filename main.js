function identifypl() {
  var plant = document.getElementById("plant-name").value;
  if (plant == "holy basil"){
    document.getElementById("reccommendations").style.color = "white";
    document.getElementById("reccommendations").innerHTML = "Potassium, Nitrogen, Phosphorous in 10:10:10 ratio";
    console.log("Nitrogen, Potassium, Phosphorous in a 10:10:10 ratio");
    document.getElementById("schedule").innerHTML = "1 inch of water per week";
  }
}
