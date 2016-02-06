var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var LeftForest = (function (_super) {
        __extends(LeftForest, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LeftForest() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LeftForest.prototype.start = function () {
            // add LeftCave Image
            this._leftForestImage = new createjs.Bitmap("../../Assets/images/WestEnemy.png");
            this.addChild(this._leftForestImage);
            // add the BACK button to the OVER scene
            this._fightButton = new objects.Button("Fight", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._fightButton);
            // START_OVER Button event listener
            this._fightButton.on("click", this._fightClick, this);
            this._runButton = new objects.Button("Run", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._runButton);
            // START_OVER Button event listener
            this._runButton.on("click", this._runClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        LeftForest.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        LeftForest.prototype._fightClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.FIGHT_LEFT;
            changeScene();
        };
        LeftForest.prototype._runClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.RUN_LEFT;
            changeScene();
        };
        return LeftForest;
    })(objects.Scene);
    scenes.LeftForest = LeftForest;
})(scenes || (scenes = {}));
//# sourceMappingURL=leftforest.js.map