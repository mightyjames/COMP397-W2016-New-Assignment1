var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightHalfRightFail = (function (_super) {
        __extends(FightHalfRightFail, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightHalfRightFail() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightHalfRightFail.prototype.start = function () {
            // add Intro Image
            this._fightHalfFail2Image = new createjs.Bitmap("../../Assets/images/EnemyFightHalfRightLost.png");
            this.addChild(this._fightHalfFail2Image);
            this._fightHalfFail = new objects.Button("restart", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._fightHalfFail);
            this._fightHalfFail.on("click", this._fightHalfFailClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightHalfRightFail.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightHalfRightFail.prototype._fightHalfFailClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return FightHalfRightFail;
    })(objects.Scene);
    scenes.FightHalfRightFail = FightHalfRightFail;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightHalfRightFail.js.map