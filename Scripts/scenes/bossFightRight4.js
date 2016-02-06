var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var BossFightRight4 = (function (_super) {
        __extends(BossFightRight4, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BossFightRight4() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BossFightRight4.prototype.start = function () {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._intro2Image);
            this._finishAll = new objects.Button("RightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._finishAllClick, this);
            this._finishHalf = new objects.Button("LeftButton", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._finishHalfClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        BossFightRight4.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightRight4.prototype._finishAllClick = function (event) {
            scene = config.Scene.FINISH_ALL_LEFT;
            changeScene();
        };
        BossFightRight4.prototype._finishHalfClick = function (event) {
            scene = config.Scene.FINISH_HALF_LEFT;
            changeScene();
        };
        return BossFightRight4;
    })(objects.Scene);
    scenes.BossFightRight4 = BossFightRight4;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightRight4.js.map