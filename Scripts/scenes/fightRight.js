var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightRight = (function (_super) {
        __extends(FightRight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightRight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightRight.prototype.start = function () {
            // add Intro Image
            this._fightLeftImage = new createjs.Bitmap("../../Assets/images/EastEnemyFight.png");
            this.addChild(this._fightLeftImage);
            this._finishAll = new objects.Button("Finish", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._finishAllClick, this);
            this._finishHalf = new objects.Button("moveAlong", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._finishHalfClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightRight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightRight.prototype._finishAllClick = function (event) {
            scene = config.Scene.FINISH_ALL_RIGHT;
            changeScene();
        };
        FightRight.prototype._finishHalfClick = function (event) {
            scene = config.Scene.FINISH_HALF_RIGHT;
            changeScene();
        };
        return FightRight;
    })(objects.Scene);
    scenes.FightRight = FightRight;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightRight.js.map