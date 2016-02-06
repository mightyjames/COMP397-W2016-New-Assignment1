var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var RightForest = (function (_super) {
        __extends(RightForest, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RightForest() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RightForest.prototype.start = function () {
            // add LeftCave Image
            this._rightForestImage = new createjs.Bitmap("../../Assets/images/EastEnemy.png");
            this.addChild(this._rightForestImage);
            // add the BACK button to the OVER scene
            this._fightRight = new objects.Button("Fight", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._fightRight);
            // START_OVER Button event listener
            this._fightRight.on("click", this._fightButtonClick, this);
            this._runRight = new objects.Button("Run", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._runRight);
            // START_OVER Button event listener
            this._runRight.on("click", this._runButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        RightForest.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        RightForest.prototype._fightButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.FIGHT_RIGHT;
            changeScene();
        };
        RightForest.prototype._runButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.RUN_RIGHT;
            changeScene();
        };
        return RightForest;
    })(objects.Scene);
    scenes.RightForest = RightForest;
})(scenes || (scenes = {}));
//# sourceMappingURL=rightforest.js.map