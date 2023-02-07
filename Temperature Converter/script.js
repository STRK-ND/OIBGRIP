function convertTemp() {
  // Get the input values
  var temp = document.getElementById("temp").value;
  var unit = document.getElementById("unit").value;

  // Convert the temperature
  if (unit == "celsius") {
    var fahrenheit = (temp * 9) / 5 + 32;
    var kelvin = temp + 273.15;
    document.getElementById("result").innerHTML =
      temp + " &#8451; = " + fahrenheit + " &#8457; = " + kelvin + " K";
  } else if (unit == "fahrenheit") {
    var celsius = ((temp - 32) * 5) / 9;
    var kelvin = ((temp + 459.67) * 5) / 9;
    document.getElementById("result").innerHTML =
      temp + " &#8457; = " + celsius + " &#8451; = " + kelvin + " K";
  } else {
    var celsius = temp - 273.15;
    var fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
    document.getElementById("result").innerHTML =
      temp + " K = " + celsius + " &#8451; = " + fahrenheit + " &#8457;";
  }
}
