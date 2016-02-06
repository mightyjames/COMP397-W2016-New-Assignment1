// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;      
        private _next: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Intro.png");
            this.addChild(this._introImage);
            
            this._next = new objects.Button(
                "NextButton", 
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._next);
            
            this._next.on("click", this._nextClick, this);                   
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++     
      private _nextClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO2;
          changeScene();
      }
    }
}