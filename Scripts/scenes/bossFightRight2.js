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
        BossFightRight2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightRight2.prototype._finishAllClick = function (event) {
            scene = config.Scene.FINISH_ALL_LEFT;
            changeScene();
        };
        BossFightRight2.prototype._finishHalfClick = function (event) {
            scene = config.Scene.FINISH_HALF_LEFT;
            changeScene();
        };
        return BossFightRight2;
    })(objects.Scene);
    scenes.BossFightRight2 = BossFightRight2;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightRight2.js.map