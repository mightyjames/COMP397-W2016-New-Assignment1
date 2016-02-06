// INTRO SCENE
module scenes {
    export class SavePrincess extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _savePrincessImage: createjs.Bitmap;       
        private _savePrincess: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._savePrincessImage = new createjs.Bitmap("../../Assets/images/princessRescue.png");
            this.addChild(this._savePrincessImage);
            
            this._savePrincess = new objects.Button("restart", config.Screen.CENTER_X + 0,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._savePrincess);
            this._savePrincess.on("click", this._savePrincessClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _savePrincessClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO;
          changeScene();
        }
    }
}