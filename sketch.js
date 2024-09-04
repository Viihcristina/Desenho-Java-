function setup() {
  createCanvas(400, 400);
  background("purple");
}

function draw() {
  if (mouseIsPressed) {
  stroke ("white") // cor da linha 
  fill ("black") // cor do fundo
  rect (mouseX,mouseY,05,05);// criando o retangulo 
  }
}
