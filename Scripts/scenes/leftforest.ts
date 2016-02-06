// LEFT_CAVE SCENE
module scenes {
    export class LeftForest extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _leftForestImage: createjs.Bitmap;
        private _fightButton: objects.Button;
        private _runButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._leftForestImage = new createjs.Bitmap("../../Assets/images/WestEnemy.png");
            this.addChild(this._leftForestImage);

            // add the BACK button to the OVER scene
            this._fightButton = new objects.Button(
                "Fight",
                config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._fightButton);
           
            // START_OVER Button event listener
            this._fightButton.on("click", this._fightClick, this);

            this._runButton = new objects.Button(
                "Run",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._runButton);
           
            // START_OVER Button event listener
            this._runButton.on("click", this._runClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _fightClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.FIGHT_LEFT;
            changeScene();
        }
        private _runClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.RUN_LEFT;
            changeScene();
        }
    }
}