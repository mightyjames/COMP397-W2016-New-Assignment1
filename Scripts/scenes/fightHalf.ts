// INTRO SCENE
module scenes {
    export class FightHalf extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _fightHalfLeftImage: createjs.Bitmap;       
        private _finishHalf: objects.Button;       
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._fightHalfLeftImage = new createjs.Bitmap("../../Assets/images/EnemyFightHalfLeft.png");
            this.addChild(this._fightHalfLeftImage);
            
            this._finishHalf = new objects.Button("bossButton", config.Screen.CENTER_X -45,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._bossFightClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _bossFightClick(event: createjs.MouseEvent){
          scene = config.Scene.BOSS_FIGHT_LEFT2;
          changeScene();
        }
    }
}