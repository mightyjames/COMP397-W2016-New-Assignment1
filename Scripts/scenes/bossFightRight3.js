var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var BossFightRight3 = (function (_super) {
        __extends(BossFightRight3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BossFightRight3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BossFightRight3.prototype.start = function () {
            // add Intro Image
            this._bossFightImage = new createjs.Bitmap("../../Assets/images/bossFightRight3.png");
            this.addChild(this._bossFightImage);
            this._bossFight3Right = new objects.Button("restart", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFight3Right);
            this._bossFight3Right.on("click", this._RestartClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        BossFightRight3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightRight3.prototype._RestartClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return BossFightRight3;
    })(objects.Scene);
    scenes.BossFightRight3 = BossFightRight3;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightRight3.js.map