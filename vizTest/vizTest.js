var[][] pointSizes;
var avgBri;

var noisescale = 0.025;    
var gridSize = 25;
var fakePI = 22.0/7.0;
function setup() {

  createCanvas(100, 100);
}

function draw() {
  perlinGridPattern();
}


function perlinGridPattern() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

//function perlinGridPattern() {
//  if (width/2.0/gridSize != pointSizes.length || height/2.0/gridSize != pointSizes[0].length) { 
//    init();
//    println("!!!!!!!!!! resize detected !!!!!!!!!!!!");
//  }
//  var tAvgBri = 0;

//  clear();

//  colorMode(HSB);
//  sphereDetail(32);
//  noStroke();
//  for (var y = 0; y < ceil((height/2.0)/gridSize); y++) {
//    for (var x = 0; x < ceil((width/2.0)/gridSize); x++) {
//      var perl = (((sin(millis()*.002)+PI*abs(cos(millis()*.00002)*5))*noise(x*noisescale, y*noisescale, millis()*0.0002)%PI)-(PI/2))*160;

//      var hue = (millis()*.02 + abs(perl)) %255;
//      var sat = 50*abs(cos(millis()*.02))+100*sin(millis()*.002)+16;
//      var bri = 240-abs(perl)+10*sin(millis()*.00002); 

//      var radius = gridSize-2;

//      var bRad = 0;
//      switch(BGPattern) {
//      case 0:
//        if (avgBri < fakePI * 30) {
//          bRad = radius/2.0*((255/max(bri, fakePI * 30))+1);
//        } else if (avgBri < fakePI * 37) {
//          bRad = radius;
//        } else if (avgBri < fakePI * 44) {
//          bRad = radius*(max(bri, fakePI * 30)/240);
//        } else if (avgBri < fakePI * 47) { 
//          bRad = radius;
//        } else {
//          bRad = radius/2.0*((255/max(bri, fakePI * 30))+1);
//        }
//        break;
//      case 1:
//        bRad = (255/max(bri, 100))*radius/2.0+radius/2.0;
//        break;
//      case 2:
//        bRad = radius;
//        break;
//      case 3:
//        bRad = (max(bri, 22/7*30)/240)*radius;
//        break;
//      case 4:
//        bRad = radius;
//        break;
//      default:
//        bRad = radius;
//        break;
//      }

//      var ps = pointSizes[x][y];

//      ps = lerp(ps, bRad, .35);
//      tAvgBri  += bri;
//      pointSizes[x][y] = ps;

//      fill(hue, sat, bri);
//      ellipse(x*gridSize+radius/2.0, y*gridSize+radius/2.0, ps, ps);
//      ellipse(width-(x*gridSize+radius/2.0), y*gridSize+radius/2.0, ps, ps);
//      ellipse(x*gridSize+radius/2.0, height-(y*gridSize+radius/2.0), ps, ps);
//      ellipse(width-(x*gridSize+radius/2.0), height-(y*gridSize+radius/2.0), ps, ps);
//    }
//  }
//  avgBri = tAvgBri/(pointSizes.length*pointSizes[0].length);
//}