var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var RunRight = (function (_super) {
        __extends(RunRight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RunRight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RunRight.prototype.start = function () {
            // add Intro Image
            this._runLeftImage = new createjs.Bitmap("../../Assets/images/EastEnemyEscape.png");
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
        RunRight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        RunRight.prototype._fightClick = function (event) {
            scene = config.Scene.RUN_FIGHT_RIGHT;
            changeScene();
        };
        RunRight.prototype._findWayClick = function (event) {
            scene = config.Scene.RUN_FIND_WAY_RIGHT;
            changeScene();
        };
        return RunRight;
    })(objects.Scene);
    scenes.RunRight = RunRight;
})(scenes || (scenes = {}));
//# sourceMappingURL=runRight.js.map