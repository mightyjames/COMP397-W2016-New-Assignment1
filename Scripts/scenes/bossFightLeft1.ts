// INTRO SCENE
module scenes {
    export class BossFightLeft1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _bossFightLeft1Image: createjs.Bitmap;       
        private _savePrincess: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._bossFightLeft1Image = new createjs.Bitmap("../../Assets/images/bossFightLeft1.png");
            this.addChild(this._bossFightLeft1Image);
            
            this._savePrincess = new objects.Button("saveThePrincess", config.Screen.CENTER_X  -45,
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
          scene = config.Scene.SAVE_PRINCESS;
          changeScene();
        }
    }
}