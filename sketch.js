const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var man1,man2,man3,man4;
var backgroundImg;
var bg1;
var man1Img,man2Img,man3Img,man4Img;
var cow,cowImg;
var boy1,boy2,girl1,girl2;
var boy1Img,boy2Img,girl3Img,girl4Img;
var goat,goatImg;
var zone,zoneImg;
var treeG;
var plant1,plant2,plant3,plant4,plant5,plant6,plant7,plant8;
var plantImg;
var plantG;
var truck,truckImg;
var rain,rainImg;
var tree,treeImg;
var endbg;
var endbgImg
var score = 0;
var play;
var START;
var reset,resetImg;
var gameOver,gameOverImg;

var END =0;
var PLAY =1;
var gameState = START;

function preload(){
    man1Img = loadImage("images/man1.png");
    man2Img = loadImage("images/man2.png");
    man3Img = loadImage("images/man3.png");
    man4Img = loadImage("images/man4.png");

    treeImg = loadImage("images/tree.png");

    goatImg = loadImage("images/goat.png");

    backgroundImg = loadImage("images/images.jpg");

    plantImg = loadImage("images/plant.png");

    zoneImg = loadImage("images/zone.jpg");

    cowImg = loadImage("images/cow.png");

    truckImg = loadImage("images/truck.png");

    rainImg = loadImage("images/rain.png");

    endbgImg = loadImage("images/end.jpg");

    resetImg = loadImage("images/restart.png");

    gameOverImg = loadImage("images/gameOver.png");

}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    zone = createSprite(600,300,1200,100);
    zone.addImage(zoneImg);
    zone.scale=4;
    

    boy1 = new Team(300,270);
    boy1.scale = 1;
    boy1.visible = false;

    boy2 = new Team(500,270);
    boy2.scale = 1;
    boy2.visible = false;

    girl1 = new Team(700,300);
    girl1.scale = 1;
    girl1.visible = false;

    girl2 = new Team(900,300);
    girl2.scale = 1;
    girl2.visible = false;

    bg1 = createSprite(600,300);
    bg1.addImage(backgroundImg);
    bg1.scale = 3.7;
    bg1.visible = false;

    tree = createSprite(200,350);
    tree.addImage(treeImg);
    tree.scale = 0.7;
    tree.visible = false;
    tree.debug = false;
    tree.setCollider("rectangle",0,0,100,200);

    truck = createSprite(100,470);
    truck.addImage(truckImg);
    truck.velocityX = 1;
    truck.scale = 0.7;
    truck.visible = false;

    endbg = createSprite(600,300);
    endbg.addImage(endbgImg);
    endbg.visible = false;
    endbg.scale = 5;

    truck.setCollider("rectangle",0,0,200,100);
    truck.debug = false;

    goat = createSprite(1000,400);
    goat.addImage(goatImg);
    goat.scale = 0.7;
    goat.visible = false;

    reset = createSprite(550,350);
    reset.addImage(resetImg);
    reset.visible=false;

    gameOver = createSprite(550,300);
    gameOver.addImage(gameOverImg);
    gameOver.visible=false;


    play = createButton('PLAY');
    play.position(550,550);
    play.style('background', 'red'); 
    play.scale = 5;

    plantG = new Group();
    treeG = new Group();

}
function draw(){

Engine.update(engine);

    background(0);
    drawSprites();
    
if(gameState === START){
    textSize(30);
    fill("white");
    text("SAVE THE OZONE LAYER CLICK PLAY TO PLANT THE PLANTS AND TREES",100,80);
        zone.visible = true;
    //play.display();
}
    
if(gameState === PLAY){

        zone.visible = false;
        boy1.visible = true;
        boy2.visible = true;
        girl1.visible = true;
        girl2.visible = true;
        truck.visible = true;
        goat.visible = true;
        
        
        textSize(15);
        fill("black")
        text("OZONE LAYER : % " + score , 70,40 );

        text("PRESS SPACE TO STOP THE TRUCK",70,70);

        
        if(score  >= 10){

            treeG.add(tree);
            tree.visible = true;

        }

        if(keyCode === 32){
            truck.velocityX = 0;
            plantG.velocityX = 0;
            treeG.velocityX = 0;
        }
        
        if(plantG.collide(truck)){
            score = score + 0;
        }
        if(treeG.collide(truck)){
            score = score + 0 ;
        }
        
        if(score === 20){
            gameState = END;
        }

        if(score === 20){
            textSize(15);
            fill("green");
            text("GREATE JOB",200,150);
        }
        if(score === 40){
            textSize(15);
            fill("green");
            
            text("WELL DONE",200,150);
        }

        
        bg1.visible = true;
        play.hide();
        boy1.display();
        boy2.display();
        girl1.display();
        girl2.display();
        smallPlants();
        createtree();
        

}
if(gameState === END){

    endbg.visible = true;
    zone.visible = false;
        boy1.visible = false;
        boy2.visible = false;
        girl1.visible = false;
        girl2.visible = false;
        truck.visible = false;
        goat.visible = false;
        //reset.visible = true;
        gameOver.visible = true;
        
        textSize(25);
        fill("black")
        text("THANK YOU FOR HELPING THE OZONE LAYER",500,150);

        plantG.destroyEach();
        treeG.destroyEach();
        


}


play.mousePressed(() => {
    gameState = PLAY;
        
        
            }
        );
    

}



function smallPlants(){
    if(frameCount % 30 === 0){

        var plant = createSprite(random(100,1100),random(350,500),30,30);
        plant.addImage(plantImg);
        //plant.addAnimation("tree",treeImg);
        plant.scale = 0.3;
       plantG.add(plant);
//plantG.Visiblity = 255;
  //       plantG.Visiblity = plantG.Visiblity - 5;
         //tint(255,plantG.Visiblity);
         
        

        score = score + 1; 





        }
}
function createtree(){
    if(frameCount % 200 === 0){
        var tree = createSprite(random(100,1100),random(350,500),30,30);
        tree.addImage(treeImg);
        tree.scale = 0.7;
        treeG.add(tree);

        score = score + 3;
            
        }

}
