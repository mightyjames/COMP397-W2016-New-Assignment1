var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var BossFightLeft2 = (function (_super) {
        __extends(BossFightLeft2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BossFightLeft2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BossFightLeft2.prototype.start = function () {
            // add Intro Image
            this._bossFight2Image = new createjs.Bitmap("../../Assets/images/bossFightLeft2.png");
            this.addChild(this._bossFight2Image);
            this._bossFight2 = new objects.Button("restart", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._bossFight2);
            this._bossFight2.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        BossFightLeft2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightLeft2.prototype._bossFightClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return BossFightLeft2;
    })(objects.Scene);
    scenes.BossFightLeft2 = BossFightLeft2;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightLeft2.js.map