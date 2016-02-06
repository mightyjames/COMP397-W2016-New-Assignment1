/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro;
var intro2: scenes.Intro2;
var intro3: scenes.Intro3;
var intro4: scenes.Intro4;
var game: scenes.Game;


//LEFT_FOREST*************************************
var leftForest: scenes.LeftForest;
var fightLeft: scenes.FightLeft;
var fightAllLeft: scenes.FightAllLeft;
var fightHalfLeft: scenes.FightHalf;
var bossFightLeft1: scenes.BossFightLeft1;
var bossFightLeft2: scenes.BossFightLeft2;
var savePrincess: scenes.SavePrincess;
var runLeft: scenes.RunLeft;
var runFightLeft: scenes.RunFightLeft;
var runFindWayLeft: scenes.RunFindWayLeft;



//RIGHT_FOREST************************************
var rightForest: scenes.RightForest;
var fightRight: scenes.FightRight
var fightAllRight: scenes.FightAllRight;
var fightHalfRight: scenes.FightHalfRight;
var fightHalfRightFail: scenes.FightHalfRightFail;
var bossFightRight1: scenes.BossFightRight1;
var bossFightRight2: scenes.BossFightRight2;
var bossFightRight3: scenes.BossFightRight3;
var runRight: scenes.RunRight;
var runFightRight: scenes.RunFightRight;
var runFindWayRight: scenes.RunFindWayRight;


function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.INTRO2:
            // show the MENU scene
            stage.removeAllChildren();
            intro2 = new scenes.Intro2();
            currentScene = intro2;
            console.log("Starting INTRO2 Scene");
            break;
        case config.Scene.INTRO3:
            // show the MENU scene
            stage.removeAllChildren();
            intro3 = new scenes.Intro3();
            currentScene = intro3;
            console.log("Starting INTRO3 Scene");
            break;
        case config.Scene.INTRO4:
            // show the MENU scene
            stage.removeAllChildren();
            intro4 = new scenes.Intro4();
            currentScene = intro4;
            console.log("Starting INTRO4 Scene");
            break;
        case config.Scene.GAME:
            // show the MENU scene
            stage.removeAllChildren();
            game = new scenes.Game();
            currentScene = game;
            console.log("Starting GAME Scene");
            break;

        //LEFT_FOREST**************************************
        case config.Scene.LEFT_FOREST:
            // show the PLAY scene
            stage.removeAllChildren();
            leftForest = new scenes.LeftForest();
            currentScene = leftForest;
            console.log("Starting LEFT_FOREST Scene");
            break;
        case config.Scene.FIGHT_LEFT:
            // show the MENU scene
            stage.removeAllChildren();
            fightLeft = new scenes.FightLeft();
            currentScene = fightLeft;
            console.log("Starting FIGHT_LEFT Scene");
            break;
        case config.Scene.FINISH_ALL_LEFT:
            // show the MENU scene
            stage.removeAllChildren();
            fightAllLeft = new scenes.FightAllLeft();
            currentScene = fightAllLeft;
            console.log("Starting FINISH_ALL_LEFT Scene");
            break;
        case config.Scene.FINISH_HALF_LEFT:
            // show the MENU scene
            stage.removeAllChildren();
            fightHalfLeft = new scenes.FightHalf();
            currentScene = fightHalfLeft;
            console.log("Starting FINISH_HALF_LEFT Scene");
            break;
        case config.Scene.BOSS_FIGHT_LEFT1:
            // show the MENU scene
            stage.removeAllChildren();
            bossFightLeft1 = new scenes.BossFightLeft1();
            currentScene = bossFightLeft1;
            console.log("Starting BOSS_FIGHT_LEFT1 Scene");
            break;
        case config.Scene.BOSS_FIGHT_LEFT2:
            // show the MENU scene
            stage.removeAllChildren();
            bossFightLeft2 = new scenes.BossFightLeft2();
            currentScene = bossFightLeft2;
            console.log("Starting BOSS_FIGHT_LEFT2 Scene");
            break;
        case config.Scene.SAVE_PRINCESS:
            // show the MENU scene
            stage.removeAllChildren();
            savePrincess = new scenes.SavePrincess();
            currentScene = savePrincess;
            console.log("Starting SAVE_PRINCESS Scene");
            break;
        case config.Scene.RUN_FIGHT_LEFT:
            // show the MENU scene
            stage.removeAllChildren();
            runFightLeft = new scenes.RunFightLeft();
            currentScene = runFightLeft;
            console.log("Starting RUN_FIGHT_LEFT Scene");
            break;
        case config.Scene.RUN_FIND_WAY_LEFT:
            // show the MENU scene
            stage.removeAllChildren();
            runFindWayLeft = new scenes.RunFindWayLeft();
            currentScene = runFindWayLeft;
            console.log("Starting RUN_FIND_WAY_LEFT Scene");
            break;
        case config.Scene.RUN_LEFT:
            // show the MENU scene
            stage.removeAllChildren();
            runLeft = new scenes.RunLeft();
            currentScene = runLeft;
            console.log("Starting RUN_LEFT Scene");
            break;

        //RIGHT_FOREST***************************************
        case config.Scene.RIGHT_FOREST:
            // show the game OVER scene
            stage.removeAllChildren();
            rightForest = new scenes.RightForest();
            currentScene = rightForest;
            console.log("Starting RIGHT_FOREST Scene");
            break;
        case config.Scene.FIGHT_RIGHT:
            // show the MENU scene
            stage.removeAllChildren();
            fightRight = new scenes.FightRight();
            currentScene = fightRight;
            console.log("Starting FIGHT_RIGHT Scene");
            break;
        case config.Scene.FINISH_ALL_RIGHT:
            // show the MENU scene
            stage.removeAllChildren();
            fightAllRight = new scenes.FightAllRight();
            currentScene = fightAllRight;
            console.log("Starting FINISH_ALL_RIGHT Scene");
            break;
        case config.Scene.FINISH_HALF_RIGHT:
            // show the MENU scene
            stage.removeAllChildren();
            fightHalfRight = new scenes.FightHalfRight();
            currentScene = fightHalfRight;
            console.log("Starting FINISH_HALF_RIGHT Scene");
            break;
        case config.Scene.FINISH_HALF_RIGHT_FAIL:
            // show the MENU scene
            stage.removeAllChildren();
            fightHalfRightFail = new scenes.FightHalfRightFail();
            currentScene = fightHalfRightFail;
            console.log("Starting FINISH_HALF_RIGHT_FAIL Scene");
            break;
        case config.Scene.BOSS_FIGHT_RIGHT1:
            // show the MENU scene
            stage.removeAllChildren();
            bossFightRight1 = new scenes.BossFightRight1();
            currentScene = bossFightRight1;
            console.log("Starting BOSS_FIGHT_RIGHT1 Scene");
            break;
        case config.Scene.BOSS_FIGHT_RIGHT2:
            // show the MENU scene
            stage.removeAllChildren();
            bossFightRight2 = new scenes.BossFightRight2();
            currentScene = bossFightRight2;
            console.log("Starting BOSS_FIGHT_RIGHT2 Scene");
            break;
        case config.Scene.BOSS_FIGHT_RIGHT3:
            // show the MENU scene
            stage.removeAllChildren();
            bossFightRight3 = new scenes.BossFightRight3();
            currentScene = bossFightRight3;
            console.log("Starting BOSS_FIGHT_RIGHT3 Scene");
            break;
        case config.Scene.RUN_RIGHT:
            // show the MENU scene
            stage.removeAllChildren();
            runRight = new scenes.RunRight();
            currentScene = runRight;
            console.log("Starting RUN_RIGHT Scene");
            break;
        case config.Scene.RUN_FIGHT_RIGHT:
            // show the MENU scene
            stage.removeAllChildren();
            runFightRight = new scenes.RunFightRight();
            currentScene = runFightRight;
            console.log("Starting RUN_FIGHT_RIGHT Scene");
            break;
        case config.Scene.RUN_FIND_WAY_RIGHT:
            // show the MENU scene
            stage.removeAllChildren();
            runFindWayRight = new scenes.RunFindWayRight();
            currentScene = runFindWayRight;
            console.log("Starting RUN_FIND_WAY_RIGHT Scene");
            break;
    }

    console.log(currentScene.numChildren);
}