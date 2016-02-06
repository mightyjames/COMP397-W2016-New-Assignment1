var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var RunFightRight = (function (_super) {
        __extends(RunFightRight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RunFightRight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RunFightRight.prototype.start = function () {
            // add Intro Image
            this._runFightImage = new createjs.Bitmap("../../Assets/images/FindYourWayOutRight.png");
            this.addChild(this._runFightImage);
            this._runFight = new objects.Button("bossButton", config.Screen.CENTER_X + -45, config.Screen.CENTER_Y + 170);
            this.addChild(this._runFight);
            this._runFight.on("click", this._runFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        RunFightRight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        RunFightRight.prototype._runFightClick = function (event) {
            scene = config.Scene.BOSS_FIGHT_RIGHT2;
            changeScene();
        };
        return RunFightRight;
    })(objects.Scene);
    scenes.RunFightRight = RunFightRight;
})(scenes || (scenes = {}));
//# sourceMappingURL=runFightRight.js.map