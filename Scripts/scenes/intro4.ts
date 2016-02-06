// INTRO SCENE
module scenes {
    export class Intro4 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _intro2Image: createjs.Bitmap;       
        private _next: objects.Button;
        private _back: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/Intro4.png");
            this.addChild(this._intro2Image);
            
            this._next = new objects.Button("NextButton", config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._next);
            this._next.on("click", this._nextClick, this);
            
            this._back = new objects.Button("BackButton", config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._back);
            this._back.on("click", this._backClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _nextClick(event: createjs.MouseEvent){
          scene = config.Scene.GAME;
          changeScene();
        }
      private _backClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO3;
          changeScene();
        }
    }
}