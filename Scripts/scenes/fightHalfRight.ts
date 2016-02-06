// INTRO SCENE
module scenes {
    export class FightHalfRight extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private fightHalfRightImage: createjs.Bitmap;       
        private _finishHalf: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this.fightHalfRightImage = new createjs.Bitmap("../../Assets/images/EnemyFightHalfRight.png");
            this.addChild(this.fightHalfRightImage);
            
            this._finishHalf = new objects.Button("moveAlong", config.Screen.CENTER_X -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._finishHalfClick, this);            
         
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _finishHalfClick(event: createjs.MouseEvent){
          scene = config.Scene.FINISH_HALF_RIGHT_FAIL;
          changeScene();
        }
     
    }
}