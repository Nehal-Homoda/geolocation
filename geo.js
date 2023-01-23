document.querySelector("button").onclick = () => {
    navigator.geolocation.getCurrentPosition(showLoc, showError, option);
  }
  function showLoc(e) //x callback function
  {
    console.log(e.coords.latitude);
    console.log(e.coords.longitude);
    let lat = e.coords.latitude;
    let long = e.coords.longitude;
    location.assign("https://www.google.com/maps?q=" + "  " + lat + " , " + long);
  }
  function showError(x)  //y callback function
  {
    switch (x.code) {
      case 0: console.log(x.message); break;
      case 1: console.log(x.message); break;
      case 2: console.log(x.message); break;
      case 3: console.log(x.message); break;
    }
  }
  let option = {    
    accuracy: true,
    timeout: 1000  
  }
  