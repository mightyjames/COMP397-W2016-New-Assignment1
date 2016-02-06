var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var FightHalf = (function (_super) {
        __extends(FightHalf, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FightHalf() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FightHalf.prototype.start = function () {
            // add Intro Image
            this._fightHalfLeftImage = new createjs.Bitmap("../../Assets/images/EnemyFightHalfLeft.png");
            this.addChild(this._fightHalfLeftImage);
            this._finishHalf = new objects.Button("bossButton", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 180);
            this.addChild(this._finishHalf);
            this._finishHalf.on("click", this._bossFightClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        FightHalf.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        FightHalf.prototype._bossFightClick = function (event) {
            scene = config.Scene.BOSS_FIGHT_LEFT2;
            changeScene();
        };
        return FightHalf;
    })(objects.Scene);
    scenes.FightHalf = FightHalf;
})(scenes || (scenes = {}));
//# sourceMappingURL=fightHalf.js.map