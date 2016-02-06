var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var BossFightLeft1 = (function (_super) {
        __extends(BossFightLeft1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BossFightLeft1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BossFightLeft1.prototype.start = function () {
            // add Intro Image
            this._bossFightLeft1Image = new createjs.Bitmap("../../Assets/images/bossFightLeft1.png");
            this.addChild(this._bossFightLeft1Image);
            this._savePrincess = new objects.Button("saveThePrincess", config.Screen.CENTER_X - 45, config.Screen.CENTER_Y + 170);
            this.addChild(this._savePrincess);
            this._savePrincess.on("click", this._savePrincessClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        BossFightLeft1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        BossFightLeft1.prototype._savePrincessClick = function (event) {
            scene = config.Scene.SAVE_PRINCESS;
            changeScene();
        };
        return BossFightLeft1;
    })(objects.Scene);
    scenes.BossFightLeft1 = BossFightLeft1;
})(scenes || (scenes = {}));
//# sourceMappingURL=bossFightLeft1.js.map