// INTRO SCENE
module scenes {
    export class RunLeft extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _runLeftImage: createjs.Bitmap;       
        private _Fight: objects.Button;
        private _findWay: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._runLeftImage = new createjs.Bitmap("../../Assets/images/WestEnemyEscape.png");
            this.addChild(this._runLeftImage);
            
            this._Fight = new objects.Button("Fight", config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._Fight);
            this._Fight.on("click", this._fightClick, this);
            
            this._findWay = new objects.Button("Run", config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._findWay);
            this._findWay.on("click", this._findWayClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _fightClick(event: createjs.MouseEvent){
          scene = config.Scene.RUN_FIGHT_LEFT;
          changeScene();
        }
      private _findWayClick(event: createjs.MouseEvent){
          scene = config.Scene.RUN_FIND_WAY_LEFT;
          changeScene();
        }
    }
}