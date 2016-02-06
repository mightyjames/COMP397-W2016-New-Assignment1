// INTRO SCENE
module scenes {
    export class FightHalfRightFail extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _fightHalfFail2Image: createjs.Bitmap;       
        private _fightHalfFail: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._fightHalfFail2Image = new createjs.Bitmap("../../Assets/images/EnemyFightHalfRightLost.png");
            this.addChild(this._fightHalfFail2Image);
            
            this._fightHalfFail = new objects.Button("restart", config.Screen.CENTER_X -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._fightHalfFail);
            this._fightHalfFail.on("click", this._fightHalfFailClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _fightHalfFailClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO;
          changeScene();
        }
    }
}