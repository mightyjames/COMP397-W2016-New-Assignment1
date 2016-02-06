// INTRO SCENE
module scenes {
    export class Game extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _intro2Image: createjs.Bitmap;       
        private _right: objects.Button;
        private _left: objects.Button;
        
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
            
            this._right = new objects.Button("RightButton", config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._right);
            this._right.on("click", this._nextClick, this);
            
            this._left = new objects.Button("LeftButton", config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._left);
            this._left.on("click", this._backClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _nextClick(event: createjs.MouseEvent){
          scene = config.Scene.RIGHT_FOREST;
          changeScene();
        }
      private _backClick(event: createjs.MouseEvent){
          scene = config.Scene.LEFT_FOREST;
          changeScene();
        }
    }
}