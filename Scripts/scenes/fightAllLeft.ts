// INTRO SCENE
module scenes {
    export class FightAllLeft extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _fightAllLeftImage: createjs.Bitmap;       
        private _finishAll: objects.Button;       
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._fightAllLeftImage = new createjs.Bitmap("../../Assets/images/AllKilledLeft.png");
            this.addChild(this._fightAllLeftImage);
            
            this._finishAll = new objects.Button("bossButton", config.Screen.CENTER_X + -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._bossFightClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _bossFightClick(event: createjs.MouseEvent){
          scene = config.Scene.BOSS_FIGHT_LEFT1;
          changeScene();
        }
    }
}