var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightAllRight = (function (_super) {
        __extends(FightAllRight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightAllRight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightAllRight.prototype.start = function () {
            // add Intro Image
            this._fightAllLeftImage = new createjs.Bitmap("../../Assets/images/AllKilledRight.png");
            this.addChild(this._fightAllLeftImage);
            this._finishAll = new objects.Button("bossButton", config.Screen.CENTER_X + -45, config.Screen.CENTER_Y + 170);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightAllRight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightAllRight.prototype._bossFightClick = function (event) {
            scene = config.Scene.BOSS_FIGHT_RIGHT1;
            changeScene();
        };
        return FightAllRight;
    })(objects.Scene);
    scenes.FightAllRight = FightAllRight;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightAllRight.js.map