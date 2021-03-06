var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var BossFightRight2 = (function (_super) {
        __extends(BossFightRight2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BossFightRight2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BossFightRight2.prototype.start = function () {
            // add Intro Image
            this._bossFightImage = new createjs.Bitmap("../../Assets/images/bossFightRight2.png");
            this.addChild(this._bossFightImage);
            this._bossFightRight2 = new objects.Button("restart", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFightRight2);
            this._bossFightRight2.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        BossFightRight2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightRight2.prototype._bossFightClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return BossFightRight2;
    })(objects.Scene);
    scenes.BossFightRight2 = BossFightRight2;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightRight2.js.map