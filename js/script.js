
//funcion que al momento de pasar el cursor sobre la imagen, esta cambia de imagen
//ropa 1 (chaleco primaveral)
const ropaUno = document.getElementById('ropaUno'); 
const ropaDos = document.getElementById('ropaDos');

ropaUno.addEventListener('mouseover', () => {
    ropaDos.style.display = 'block';
  ropaUno.style.display = 'none';
});

ropaDos.addEventListener('mouseout', () => {
    ropaUno.style.display = 'block';
    ropaDos.style.display = 'none';
});

//ropa invernal
const ropaInvernalUno = document.getElementById('ropaInvernalUno'); 
const ropaInvernalDos = document.getElementById('ropaInvernalDos');

ropaInvernalUno.addEventListener('mouseover', () => {
    ropaInvernalDos.style.display = 'block';
    ropaInvernalUno.style.display = 'none';
});

ropaInvernalDos.addEventListener('mouseout', () => {
    ropaInvernalUno.style.display = 'block';
    ropaInvernalDos.style.display = 'none';
});





//ropa disfraz
const ropaDisfrazlUno = document.getElementById('ropaDisfrazUno'); 
const ropaDisfrazlDos = document.getElementById('ropaDisfrazDos');

ropaDisfrazUno.addEventListener('mouseover', () => {
    ropaDisfrazDos.style.display = 'block';
    ropaDisfrazUno.style.display = 'none';
});

ropaDisfrazDos.addEventListener('mouseout', () => {
    ropaDisfrazUno.style.display = 'block';
    ropaDisfrazDos.style.display = 'none';
});




//funcion del boton que se activa cuando pasas el cursor por ensima

//primer alimento
function showButton() {
    var boton = document.getElementById("miBoton");
    boton.style.display = "block";
  }
  
  function hideButton() {
    var boton = document.getElementById("miBoton");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton").addEventListener("click", function() {
    alert("Has comprado el producto");
  });
  

//segundo alimento

  function showButton2() {
    var boton = document.getElementById("miBoton2");
    boton.style.display = "block";
  }
  
  function hideButton2() {
    var boton = document.getElementById("miBoton2");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton2").addEventListener("click", function() {
    alert("Has comprado el producto");
  });

  
  //Tercer alimento

  function showButton3() {
    var boton = document.getElementById("miBoton3");
    boton.style.display = "block";
  }
  
  function hideButton3() {
    var boton = document.getElementById("miBoton3");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton3").addEventListener("click", function() {
    alert("Has comprado el producto");
  });

  
  //Cuarto alimento

  function showButton4() {
    var boton = document.getElementById("miBoton4");
    boton.style.display = "block";
  }
  
  function hideButton4() {
    var boton = document.getElementById("miBoton4");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton4").addEventListener("click", function() {
    alert("Has comprado el producto");
  });


  //Quinto alimento

  function showButton5() {
    var boton = document.getElementById("miBoton5");
    boton.style.display = "block";
  }
  
  function hideButton5() {
    var boton = document.getElementById("miBoton5");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton5").addEventListener("click", function() {
    alert("Has comprado el producto");
  });


  //Sexto alimento

  function showButton6() {
    var boton = document.getElementById("miBoton6");
    boton.style.display = "block";
  }
  
  function hideButton6() {
    var boton = document.getElementById("miBoton6");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton6").addEventListener("click", function() {
    alert("Has comprado el producto");
  });


  //Septimo alimento

  function showButton7() {
    var boton = document.getElementById("miBoton7");
    boton.style.display = "block";
  }
  
  function hideButton7() {
    var boton = document.getElementById("miBoton7");
    boton.style.display = "none";
  }
  
  document.getElementById("miBoton7").addEventListener("click", function() {
    alert("Has comprado el producto");
  });

  //Octavo alimento

  function showButton8() {
    var boton = document.getElementById("miBoton8");
    boton.style.display = "block";
  }
  
  function hideButton8() {
    var boton = document.getElementById("miBoton8");
    boton.style.display = "none";
  }
  
 

  