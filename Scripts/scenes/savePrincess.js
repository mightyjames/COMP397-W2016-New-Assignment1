var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var SavePrincess = (function (_super) {
        __extends(SavePrincess, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SavePrincess() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SavePrincess.prototype.start = function () {
            // add Intro Image
            this._savePrincessImage = new createjs.Bitmap("../../Assets/images/princessRescue.png");
            this.addChild(this._savePrincessImage);
            this._savePrincess = new objects.Button("restart", config.Screen.CENTER_X + 0, config.Screen.CENTER_Y + 170);
            this.addChild(this._savePrincess);
            this._savePrincess.on("click", this._savePrincessClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SavePrincess.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        SavePrincess.prototype._savePrincessClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return SavePrincess;
    })(objects.Scene);
    scenes.SavePrincess = SavePrincess;
})(scenes || (scenes = {}));
//# sourceMappingURL=savePrincess.js.map