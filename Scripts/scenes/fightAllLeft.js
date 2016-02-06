var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightAllLeft = (function (_super) {
        __extends(FightAllLeft, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightAllLeft() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightAllLeft.prototype.start = function () {
            // add Intro Image
            this._fightAllLeftImage = new createjs.Bitmap("../../Assets/images/AllKilledLeft.png");
            this.addChild(this._fightAllLeftImage);
            this._finishAll = new objects.Button("bossButton", config.Screen.CENTER_X + -45, config.Screen.CENTER_Y + 170);
            this.addChild(this._finishAll);
            this._finishAll.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightAllLeft.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightAllLeft.prototype._bossFightClick = function (event) {
            scene = config.Scene.BOSS_FIGHT_LEFT1;
            changeScene();
        };
        return FightAllLeft;
    })(objects.Scene);
    scenes.FightAllLeft = FightAllLeft;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightAllLeft.js.map