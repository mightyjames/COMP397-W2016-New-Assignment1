// INTRO SCENE
module scenes {
    export class BossFightRight1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _bossFight1Image: createjs.Bitmap;       
        private _bossFight1: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._bossFight1Image = new createjs.Bitmap("../../Assets/images/bossFightRight1.png");
            this.addChild(this._bossFight1Image);
            
            this._bossFight1 = new objects.Button("restart", config.Screen.CENTER_X -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFight1);
            this._bossFight1.on("click", this._bossFightClick, this);
             
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