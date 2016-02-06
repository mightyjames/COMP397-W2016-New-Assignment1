// LEFT_CAVE SCENE
module scenes {
    export class RightForest extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _rightForestImage: createjs.Bitmap;
        private _fightRight: objects.Button;
        private _runRight: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._rightForestImage = new createjs.Bitmap("../../Assets/images/EastEnemy.png");
            this.addChild(this._rightForestImage);

            // add the BACK button to the OVER scene
            this._fightRight = new objects.Button(
                "Fight",
                config.Screen.CENTER_X -170,
                config.Screen.CENTER_Y +180);
            this.addChild(this._fightRight);
           
            // START_OVER Button event listener
            this._fightRight.on("click", this._fightButtonClick, this);
            
             this._runRight = new objects.Button(
                "Run",
                config.Screen.CENTER_X +150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._runRight);
           
            // START_OVER Button event listener
            this._runRight.on("click", this._runButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _fightButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.FIGHT_RIGHT;
            changeScene();
        }
        
         private _runButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.RUN_RIGHT;
            changeScene();
        }
    }
}