var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightHalfRight = (function (_super) {
        __extends(FightHalfRight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightHalfRight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightHalfRight.prototype.start = function () {
            // add Intro Image
            this.fightHalfRightImage = new createjs.Bitmap("../../Assets/images/EnemyFightHalfRight.png");
            this.addChild(this.fightHalfRightImage);
            this._finishHalf = new objects.Button("moveAlong", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._finishHalfClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightHalfRight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightHalfRight.prototype._finishHalfClick = function (event) {
            scene = config.Scene.FINISH_HALF_RIGHT_FAIL;
            changeScene();
        };
        return FightHalfRight;
    })(objects.Scene);
    scenes.FightHalfRight = FightHalfRight;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightHalfRight.js.map