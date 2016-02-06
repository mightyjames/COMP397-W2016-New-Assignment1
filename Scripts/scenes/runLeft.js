var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var RunLeft = (function (_super) {
        __extends(RunLeft, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RunLeft() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RunLeft.prototype.start = function () {
            // add Intro Image
            this._runLeftImage = new createjs.Bitmap("../../Assets/images/WestEnemyEscape.png");
            this.addChild(this._runLeftImage);
            this._Fight = new objects.Button("Fight", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._Fight);
            this._Fight.on("click", this._fightClick, this);
            this._findWay = new objects.Button("Run", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._findWay);
            this._findWay.on("click", this._findWayClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        RunLeft.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        RunLeft.prototype._fightClick = function (event) {
            scene = config.Scene.RUN_FIGHT_LEFT;
            changeScene();
        };
        RunLeft.prototype._findWayClick = function (event) {
            scene = config.Scene.RUN_FIND_WAY_LEFT;
            changeScene();
        };
        return RunLeft;
    })(objects.Scene);
    scenes.RunLeft = RunLeft;
})(scenes || (scenes = {}));
//# sourceMappingURL=runLeft.js.map