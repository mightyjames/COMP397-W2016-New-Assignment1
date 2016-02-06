// INTRO SCENE
module scenes {
    export class RunFindWayLeft extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _findWayImage: createjs.Bitmap;       
        private _findWay: objects.Button;       
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._findWayImage = new createjs.Bitmap("../../Assets/images/FindYourWayOut.png");
            this.addChild(this._findWayImage);
            
            this._findWay = new objects.Button("restart", config.Screen.CENTER_X + -45,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._findWay);
            this._findWay.on("click", this._FindWayClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
      
      private _FindWayClick(event: createjs.MouseEvent){
          scene = config.Scene.INTRO;
          changeScene();
        }
    }
}