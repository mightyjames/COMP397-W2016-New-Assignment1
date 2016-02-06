// INTRO SCENE
module scenes {
    export class BossFightRight4 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _intro2Image: createjs.Bitmap;       
        private _finishAll: objects.Button;
        private _finishHalf: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._intro2Image);
            
            this._finishAll = new objects.Button("RightButton", config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._finishAllClick, this);
            
            this._finishHalf = new objects.Button("LeftButton", config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._finishHalfClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _finishAllClick(event: createjs.MouseEvent){
          scene = config.Scene.FINISH_ALL_LEFT;
          changeScene();
        }
      private _finishHalfClick(event: createjs.MouseEvent){
          scene = config.Scene.FINISH_HALF_LEFT;
          changeScene();
        }
    }
}