var datos = [];
var m = 0;
var b = 0;

// Fondo
function setup() {
  createCanvas(500, 500); // Personal (1366,662)
}

// Gradiente Descendiente 
function gradienteDescendiente() {
  
  var alfa = 0.005; // learning rate 
  
 for(var i=0; i< datos.length; i++){
   var x = datos [i].x;
   var y = datos [i].y;
   
   var recta = m * x + b;
   var error = y - recta;
   
   m = m + (error * x) * alfa;
   b = b + (error) * alfa;
   
 }
}

// Dibujado de la linea por medio del mapeo final de x1,y1 y x2,y2
function drawLine() {
  var x1 = 0;
  var y1 = m * x1 + b;
  var x2 = 1;
  var y2 = m * x2 + b;

  x1 = map(x1, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  x2 = map(x2, 0, 1, 0, width);
  y2 = map(y2, 0, 1, height, 0);

  stroke(255,114,32);
  strokeWeight(2);
  line(x1, y1, x2, y2);
}

// Creación de datos cada vez que hay un click
function mousePressed() {
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);
  var punto = createVector(x, y);

  datos.push(punto);
}

// Dibujo y mapeo de los puntos creados  
function draw() {
  background(51);
  
  for (var i = 0; i < datos.length; i++) {
    var x = map(datos[i].x, 0, 1, 0, width);
    var y = map(datos[i].y, 0, 1, height, 0);
    
    fill(255);
    stroke(255);
    ellipse(x, y, 4, 4);
  }

  if (datos.length > 1) {
    gradienteDescendiente();
    drawLine();
  }
}