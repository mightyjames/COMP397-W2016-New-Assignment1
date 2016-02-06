var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var BossFightRight1 = (function (_super) {
        __extends(BossFightRight1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BossFightRight1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BossFightRight1.prototype.start = function () {
            // add Intro Image
            this._bossFight1Image = new createjs.Bitmap("../../Assets/images/bossFightRight1.png");
            this.addChild(this._bossFight1Image);
            this._bossFight1 = new objects.Button("restart", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFight1);
            this._bossFight1.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        BossFightRight1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightRight1.prototype._bossFightClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return BossFightRight1;
    })(objects.Scene);
    scenes.BossFightRight1 = BossFightRight1;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightRight1.js.map