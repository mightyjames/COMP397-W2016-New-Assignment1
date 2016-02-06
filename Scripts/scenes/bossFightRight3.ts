// INTRO SCENE
module scenes {
    export class BossFightRight3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _bossFightImage: createjs.Bitmap;       
        private _bossFight3Right: objects.Button;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._bossFightImage = new createjs.Bitmap("../../Assets/images/bossFightRight3.png");
            this.addChild(this._bossFightImage);
            
            this._bossFight3Right = new objects.Button("restart", config.Screen.CENTER_X -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFight3Right);
            this._bossFight3Right.on("click", this._RestartClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _RestartClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO;
          changeScene();
        }
    }
}