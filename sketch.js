//GameState
var gs = 0;

//Start
var sb;

//Walls
var w1,w2,w3,w4;

//Obystacles
//There are 6 rooms
var room = 0;

var o1, o2, o3, o4, o5, o6, o7, o8;

//Doors
var d1, d2, d3;

//Enemies
var e1, e2, e3, e4;
var be;
var se1, se2;

var bss;

//Sprites
var p1;

var lives = 5;
var xp = 0;
var level = 1;
var atkbox; 
var h1, h2, h3, h4, h5;


//BossLife
var bosslife = 14;
var bh1, bh2, bh3, bh4, bh5, bh6, bh7;


//Mobile Controls
var button;



//Images
var player, tree, enemy1, enemy2, enemy3, boss;

//Music
var l1, l2, l3, bsl, ttl;
var splay = 'yes';


//Extra
var debugToggle = 'off';

function preload(){
  player = loadImage("player.png");

  enemy1 = loadImage("fire.png");
  enemy2 = loadImage("cloud.png");
  enemy3 = loadImage("demoncat.png");
  boss = loadImage("noreturn.png");

  //Theme
  ttl = loadSound("Title.wav");
  l1 = loadSound("Level1.wav");
  l2 = loadSound("Level2.wav");
  l3 = loadSound("Level3.wav");
  bsl = loadSound("BossLevel.wav");
}
function setup(){
  createCanvas(900, 500);

  //Start
  sb = createSprite(400, 400);
  sb.visible = false;

  //Sprites
  p1 = createSprite(450, 300, 25, 25);
  p1.addImage(player);


  //Obystacles
  //Vertical
  o1 = createSprite(0, 0, 25, 100);
  o2 = createSprite(0, 0, 25, 100);
  o3 = createSprite(0, 0, 25, 100);
  o4 = createSprite(0, 0, 25, 100);
  //Horizontal
  o5 = createSprite(0, 0, 100, 25);
  o6 = createSprite(0, 0, 100, 25);
  o7 = createSprite(0, 0, 100, 25);
  o8 = createSprite(0, 0, 100, 25);


  //Doors
  d1 = createSprite(0, 0, 50, 13);
  d2 = createSprite(0, 0, 13, 50);
  d3 = createSprite(0, 0, 13, 50);
  

  //Enemy
  e1 = createSprite(0, 0, 25, 25);
  e2 = createSprite(0, 0, 25, 25);
  e3 = createSprite(0, 0, 25, 25);
  e4 = createSprite(0, 0, 25, 25);

  e1.addImage(enemy1);
  e2.addImage(enemy1);
  e3.addImage(enemy1);
  e4.addImage(enemy1);

  be = createSprite(0, 0, 50, 50);
  be.addImage(enemy3);
  be.scale = 2;

  se1 = createSprite(0, 0, 25, 25);
  se2 = createSprite(0, 0, 25, 25);
  se1.addImage(enemy2);
  se2.addImage(enemy2);


  //Walls
  w1 = createSprite(0, 400, 100, 1000);
  w2 = createSprite(700, 0, 1400, 100);
  w3 = createSprite(900, 400, 100, 1000);
  w4 = createSprite(700, 500, 1400, 100);

  //Boss
  bss = createSprite(0, 0, 50, 50);
  bss.addImage(boss);
  bss.scale = 2;

  //Hearts
  h1 = createSprite(100, 25, 20, 25);
  h2 = createSprite(125, 25, 20, 25);
  h3 = createSprite(150, 25, 20, 25);
  h4 = createSprite(175, 25, 20, 25);
  h5 = createSprite(200, 25, 20, 25);
  h1.shapeColor = "red";
  h2.shapeColor = "red";
  h3.shapeColor = "red";
  h4.shapeColor = "red";
  h5.shapeColor = "red";

  //BossHearts
  bh1 = createSprite(600, 25, 20, 25);
  bh2 = createSprite(625, 25, 20, 25);
  bh3 = createSprite(650, 25, 20, 25);
  bh4 = createSprite(675, 25, 20, 25);
  bh5 = createSprite(700, 25, 20, 25);
  bh6 = createSprite(725, 25, 20, 25);
  bh7 = createSprite(750, 25, 20, 25);
  bh1.shapeColor = "purple";
  bh2.shapeColor = "purple";
  bh3.shapeColor = "purple";
  bh4.shapeColor = "purple";
  bh5.shapeColor = "purple";
  bh6.shapeColor = "purple";
  bh7.shapeColor = "purple";

  //Attack Box
  atkbox = createSprite(700, 700, 35, 20);
  p1.setCollider("rectangle", 0, 0, 20, 25);
  atkbox.visible = false;


  //Mobile
  button = createSprite(mouseX, mouseY, 50, 50);
  button.visible = false;

}
function draw(){
  background("lightgreen");
  drawSprites();
  camera.position.x = canvas.x;
  camera.position.y = canvas.y;
  
  if (keyDown("shift")){
    if (keyDown("d")){
        if (keyWentDown("b")){
            if (debugToggle === 'off'){
                debugToggle = 'on';
                lives += 1 + level/5
            }else{
                debugToggle = 'off';
            }
        }
    }
  }

  if (gs === 0){
    lives = 5;
    if (splay === 'yes'){
        ttl.play();
        splay = 'no';
    }
    fill("black");
    textSize(48);
    text("CATT's Weird Dimension [Mobile]", 100, 200);
    textSize(12);
    text("(C)DarwinX3052 2021", 400, 250);
    textSize(36);
    text("Start", 425, 400);
    if (button.isTouching(sb)){
      gs = 1;
      room = 1;
      p1.x = 700;
      p1.y = 400;
      ttl.stop();
      splay = 'yes'
      if (room === 0){
        e1.x = -2000;
        e1.y = -2000;
        e2.x = -2000;
        e2.y = -2000;
        e3.x = -2000;
        e3.y = -2000;
        e4.x = -2000;
        e4.y = -2000;

        be.x = -2000;
        be.y = -2000;

        se1.x = -2000;
        se1.y = -2000;
        se2.x = -2000;
        se2.y = -2000;

        bss.x = -2000;
        bss.y = -2000;
    }

    if (room === 1){
        e1.x = 100;
        e1.y = 100;
        e2.x = 800;
        e2.y = 400;
        e3.x = -2000;
        e3.y = -2000;
        e4.x = -2000;
        e4.y = -2000;

        be.x = -2000;
        be.y = -2000;

        se1.x = -200;
        se1.y = -200;
        se2.x = -200;
        se2.y = -200;

        bss.x = -2000;
        bss.y = -2000;
    }

    if (room === 2){
        e1.x = 500;
        e1.y = 400;
        e2.x = 500;
        e2.y = 200;
        e3.x = 500;
        e3.y = 400;
        e4.x = -2000;
        e4.y = -2000;

        be.x = -2000;
        be.y = -2000;

        se1.x = 200;
        se1.y = 400;
        se2.x = -200;
        se2.y = -200;

        bss.x = -2000;
        bss.y = -2000;
    }

    if (room === 3){
        e1.x = -2000;
        e1.y = -2000;
        e2.x = -2000;
        e2.y = -2000;
        e3.x = -2000;
        e3.y = -2000;
        e4.x = -2000;
        e4.y = -2000;

        be.x = 400;
        be.y = 200;

        se1.x = 200;
        se1.y = 200;
        se2.x = 800;
        se2.y = 400;

        bss.x = -2000;
        bss.y = -2000;
    }

    if (room === 4){
        e1.x = 200;
        e1.y = 200;
        e2.x = -2000;
        e2.y = -2000;
        e3.x = -2000;
        e3.y = -2000;
        e4.x = -2000;
        e4.y = -2000;

        be.x = 300;
        be.y = 400;

        se1.x = 600;
        se1.y = 300;
        se2.x = 800;
        se2.y = 450;

        bss.x = -2000;
        bss.y = -2000;
    }

    if (room === 5){
        e1.x = 500;
        e1.y = 600;
        e2.x = 700;
        e2.y = 400;
        e3.x = 300;
        e3.y = 450;
        e4.x = 100;
        e4.y = 300;

        be.x = 200;
        be.y = 300;

        se1.x = 200;
        se1.y = 200;
        se2.x = 800;
        se2.y = 450;

        bss.x = -2000;
        bss.y = -2000;
    }
    
    if (room === 6){
        e1.x = -2000;
        e1.y = -2000;
        e2.x = -2000;
        e2.y = -2000;
        e3.x = -2000;
        e3.y = -2000;
        e4.x = -2000;
        e4.y = -2000;

        be.x = -2000;
        be.y = -2000;

        se1.x = -200;
        se1.y = -200;
        se2.x = -200;
        se2.y = -200;

        bss.x = 200;
        bss.y = 200;
    }
    }
  }
  if (gs === 1){
      if (splay === 'yes'){
          var i = round(random(1,3));
          if (i === 1){
              l1.play();
          }else if (i === 2){
              l2.play();
          }else{
            l3.play();
          }
          splay = 'no'
      }
      Enemy();
      textSize(20);
      fill("black");
      text("PLAYER LEVEL: " + level, 225, 25);
      text("XP: " + xp, 425, 25);
    if (button.y < p1.y){
      p1.y += -5
      p1.mirrorX(-1)
    }
    if (button.y > p1.y){
      p1.y += 5
      p1.mirrorX(1)
    }
    if (button.x < p1.x){
      p1.x += -5
    }
    if (button.x > p1.x){
      p1.x += 5
    }
    if (eUpdt === 'yes'){
        eUpdt = 'no';
        if (room === 0){
            e1.x = -2000;
            e1.y = -2000;
            e2.x = -2000;
            e2.y = -2000;
            e3.x = -2000;
            e3.y = -2000;
            e4.x = -2000;
            e4.y = -2000;
    
            be.x = -2000;
            be.y = -2000;
    
            se1.x = -2000;
            se1.y = -2000;
            se2.x = -2000;
            se2.y = -2000;
    
            bss.x = -2000;
            bss.y = -2000;
        }
    
        if (room === 1){
            e1.x = 100;
            e1.y = 100;
            e2.x = 800;
            e2.y = 400;
            e3.x = -2000;
            e3.y = -2000;
            e4.x = -2000;
            e4.y = -2000;
    
            be.x = -2000;
            be.y = -2000;
    
            se1.x = -200;
            se1.y = -200;
            se2.x = -200;
            se2.y = -200;
    
            bss.x = -2000;
            bss.y = -2000;
        }
    
        if (room === 2){
            e1.x = 500;
            e1.y = 400;
            e2.x = 500;
            e2.y = 200;
            e3.x = 500;
            e3.y = 400;
            e4.x = -2000;
            e4.y = -2000;
    
            be.x = -2000;
            be.y = -2000;
    
            se1.x = 200;
            se1.y = 400;
            se2.x = -200;
            se2.y = -200;
    
            bss.x = -2000;
            bss.y = -2000;
        }
    
        if (room === 3){
            e1.x = -2000;
            e1.y = -2000;
            e2.x = -2000;
            e2.y = -2000;
            e3.x = -2000;
            e3.y = -2000;
            e4.x = -2000;
            e4.y = -2000;
    
            be.x = 400;
            be.y = 200;
    
            se1.x = 200;
            se1.y = 200;
            se2.x = 800;
            se2.y = 400;
    
            bss.x = -2000;
            bss.y = -2000;
        }
    
        if (room === 4){
            e1.x = 200;
            e1.y = 200;
            e2.x = -2000;
            e2.y = -2000;
            e3.x = -2000;
            e3.y = -2000;
            e4.x = -2000;
            e4.y = -2000;
    
            be.x = 300;
            be.y = 400;
    
            se1.x = 600;
            se1.y = 300;
            se2.x = 800;
            se2.y = 450;
    
            bss.x = -2000;
            bss.y = -2000;
        }
    
        if (room === 5){
            e1.x = 500;
            e1.y = 600;
            e2.x = 700;
            e2.y = 400;
            e3.x = 300;
            e3.y = 450;
            e4.x = 100;
            e4.y = 300;
    
            be.x = 200;
            be.y = 300;
    
            se1.x = 200;
            se1.y = 200;
            se2.x = 800;
            se2.y = 450;
    
            bss.x = -2000;
            bss.y = -2000;
        }
        
        if (room === 6){
            e1.x = -2000;
            e1.y = -2000;
            e2.x = -2000;
            e2.y = -2000;
            e3.x = -2000;
            e3.y = -2000;
            e4.x = -2000;
            e4.y = -2000;
    
            be.x = -2000;
            be.y = -2000;
    
            se1.x = -200;
            se1.y = -200;
            se2.x = -200;
            se2.y = -200;
    
            bss.x = 200;
            bss.y = 200;
        }
  }
  }

  //Debug Toggle
  if (debugToggle === 'on'){
    textSize(12);
    text("P1_PositionX=" + p1.x, 100, 90);
    text("P1_PositionY=" + p1.y, 100, 115);
    text("P1_Lives=" + lives, 100, 140);
    text("P1_Level=" + level, 100, 165);
    text("P1_XP=" + xp, 100, 190);
    text("GameState=" + gs, 100, 240);
    text("Room=" + room, 100, 265);
    text("DebugToggle=" + debugToggle, 100, 290);
    text("DarwinX3052 Games 2021", 100, 665);
    text("FrameCount=" + frameCount, 100, 315);
    text("Number=" + round(random(1,100)), 100, 340);
    text("Touches=" + touches, 100, 365);
    text("Sound_Play?=" + splay, 100, 390);

    text("NEWLY ADDED", 100, 440);
    text("Boss_Life=" + bosslife, 100, 465);
    



    p1.debug = true
    atkbox.debug = true
    h1.debug = true
    h2.debug = true
    h3.debug = true
    h4.debug = true
    h5.debug = true
    w1.debug = true
    w2.debug = true
    w3.debug = true
    w4.debug = true

    o1.debug = true
    o2.debug = true
    o3.debug = true
    o4.debug = true
    o5.debug = true
    o6.debug = true
    o7.debug = true
    o8.debug = true

    e1.debug = true
    e2.debug = true
    e3.debug = true
    e4.debug = true
    be.debug = true
    se1.debug = true
    se2.debug = true

    d1.debug = true
    d2.debug = true
    d3.debug = true
  }
  if (debugToggle === 'off'){
    p1.debug = false
    atkbox.debug = false
    h1.debug = false
    h2.debug = false
    h3.debug = false
    h4.debug = false
    h5.debug = false
    w1.debug = false
    w2.debug = false
    w3.debug = false
    w4.debug = false

    o1.debug = false
    o2.debug = false
    o3.debug = false
    o4.debug = false
    o5.debug = false
    o6.debug = false
    o7.debug = false
    o8.debug = false

    e1.debug = false
    e2.debug = false
    e3.debug = false
    e4.debug = false
    be.debug = false
    se1.debug = false
    se2.debug = false

    d1.debug = false
    d2.debug = false
    d3.debug = false
  }

  //Collision and  Attack Box
  atkbox.x = p1.x;
  atkbox.y = p1.y;

  button.x = mouseX;
  button.y = mouseY;

  p1.collide(w1);
  p1.collide(w2);
  p1.collide(w3);
  p1.collide(w4);

  bss.collide(w1);
  bss.collide(w2);
  bss.collide(w3);
  bss.collide(w4);

  e1.collide(w1);
  e1.collide(w2);
  e1.collide(w3);
  e1.collide(w4);
  e2.collide(w1);
  e2.collide(w2);
  e2.collide(w3);
  e2.collide(w4);
  e3.collide(w1);
  e3.collide(w2);
  e3.collide(w3);
  e3.collide(w4);
  e4.collide(w1);
  e4.collide(w2);
  e4.collide(w3);
  e4.collide(w4);
  se1.collide(w1);
  se1.collide(w2);
  se1.collide(w3);
  se1.collide(w4);
  se2.collide(w1);
  se2.collide(w2);
  se2.collide(w3);
  se2.collide(w4);
  be.collide(w1);
  be.collide(w2);
  be.collide(w3);
  be.collide(w4);


  //Oby
  p1.collide(o1);
  p1.collide(o2);
  p1.collide(o3);
  p1.collide(o4);
  p1.collide(o5);
  p1.collide(o6);
  p1.collide(o7);
  p1.collide(o8);

  e1.collide(o1);
  e1.collide(o2);
  e1.collide(o3);
  e1.collide(o4);
  e1.collide(o5);
  e1.collide(o6);
  e1.collide(o7);
  e1.collide(o8);
  e2.collide(o1);
  e2.collide(o2);
  e2.collide(o3);
  e2.collide(o4);
  e2.collide(o5);
  e2.collide(o6);
  e2.collide(o7);
  e2.collide(o8);
  e3.collide(o1);
  e3.collide(o2);
  e3.collide(o3);
  e3.collide(o4);
  e3.collide(o5);
  e3.collide(o6);
  e3.collide(o7);
  e3.collide(o8);
  e4.collide(o1);
  e4.collide(o2);
  e4.collide(o3);
  e4.collide(o4);
  e4.collide(o5);
  e4.collide(o6);
  e4.collide(o7);
  e4.collide(o8);
  

  Room();


  //Movement
        //Fire BOIZ
        if (e1.x > p1.x){
            e1.velocityX = -3;
        }
        if (e1.x < p1.x){
            e1.velocityX = 3;
        }
        if (e1.y > p1.y){
            e1.velocityY = -3;
        }
        if (e1.y < p1.y){
            e1.velocityY = 3;
        }
        
        if (e2.x > p1.x){
            e2.velocityX = -3;
        }
        if (e2.x < p1.x){
            e2.velocityX = 3;
        }
        if (e2.y > p1.y){
            e2.velocityY = -3;
        }
        if (e2.y < p1.y){
            e2.velocityY = 3;
        }

        if (e3.x > p1.x){
            e3.velocityX = -3;
        }
        if (e3.x < p1.x){
            e3.velocityX = 3;
        }
        if (e3.y > p1.y){
            e3.velocityY = -3;
        }
        if (e3.y < p1.y){
            e3.velocityY = 3;
        }

        if (e4.x > p1.x){
            e4.velocityX = -3;
        }
        if (e4.x < p1.x){
            e4.velocityX = 3;
        }
        if (e4.y > p1.y){
            e4.velocityY = -3;
        }
        if (e4.y < p1.y){
            e4.velocityY = 3;
        }

        //Floaters
        if (se1.x > p1.x){
            se1.velocityX = -3;
        }
        if (se1.x < p1.x){
            se1.velocityX = 2;
        }
        if (se1.y > p1.y){
            se1.velocityY = -3;
        }
        if (se1.y < p1.y){
            se1.velocityY = 2;
        }
        
        if (se2.x > p1.x){
            se2.velocityX = -2;
        }
        if (se2.x < p1.x){
            se2.velocityX = 3;
        }
        if (se2.y > p1.y){
            se2.velocityY = -2;
        }
        if (se2.y < p1.y){
            se2.velocityY = 3;
        }

        //DemonCat
        if (be.x > p1.x){
            be.velocityX = -2;
        }
        if (be.x < p1.x){
            be.velocityX = 2;
        }
        if (be.y > p1.y){
            be.velocityY = -2;
        }
        if (be.y < p1.y){
            be.velocityY = 2;
        }

        //DemonCat
        if (bss.x > p1.x){
            bss.velocityX = -4;
        }
        if (bss.x < p1.x){
            bss.velocityX = 5;
        }
        if (bss.y > p1.y){
            bss.velocityY = -4;
        }
        if (bss.y < p1.y){
            bss.velocityY = 5;
        }
}