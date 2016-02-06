// INTRO SCENE
module scenes {
    export class RunFightLeft extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _runFightImage: createjs.Bitmap;       
        private _runFight: objects.Button;       
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._runFightImage = new createjs.Bitmap("../../Assets/images/WestEnemyFightLost.png");
            this.addChild(this._runFightImage);
            
            this._runFight = new objects.Button("restart", config.Screen.CENTER_X + -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._runFight);
            this._runFight.on("click", this._runFightClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _runFightClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO;
          changeScene();
        }
    }
}