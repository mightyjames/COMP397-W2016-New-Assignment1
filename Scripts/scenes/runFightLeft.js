var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var RunFightLeft = (function (_super) {
        __extends(RunFightLeft, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RunFightLeft() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RunFightLeft.prototype.start = function () {
            // add Intro Image
            this._runFightImage = new createjs.Bitmap("../../Assets/images/WestEnemyFightLost.png");
            this.addChild(this._runFightImage);
            this._runFight = new objects.Button("restart", config.Screen.CENTER_X + -45, config.Screen.CENTER_Y + 170);
            this.addChild(this._runFight);
            this._runFight.on("click", this._runFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        RunFightLeft.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        RunFightLeft.prototype._runFightClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return RunFightLeft;
    })(objects.Scene);
    scenes.RunFightLeft = RunFightLeft;
})(scenes || (scenes = {}));
//# sourceMappingURL=runFightLeft.js.map