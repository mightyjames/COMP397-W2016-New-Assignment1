// INTRO SCENE
module scenes {
    export class BossFightRight2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _bossFightImage: createjs.Bitmap;       
        private _bossFightRight2: objects.Button;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._bossFightImage = new createjs.Bitmap("../../Assets/images/bossFightRight2.png");
            this.addChild(this._bossFightImage);
            
          this._bossFightRight2 = new objects.Button("restart", config.Screen.CENTER_X -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFightRight2);
            this._bossFightRight2.on("click", this._bossFightClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _bossFightClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO;
          changeScene();
        }
 
    }
}