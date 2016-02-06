var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var RunFindWayLeft = (function (_super) {
        __extends(RunFindWayLeft, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RunFindWayLeft() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RunFindWayLeft.prototype.start = function () {
            // add Intro Image
            this._findWayImage = new createjs.Bitmap("../../Assets/images/FindYourWayOut.png");
            this.addChild(this._findWayImage);
            this._findWay = new objects.Button("restart", config.Screen.CENTER_X + -45, config.Screen.CENTER_Y + 170);
            this.addChild(this._findWay);
            this._findWay.on("click", this._FindWayClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        RunFindWayLeft.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        RunFindWayLeft.prototype._FindWayClick = function (event) {
            scene = config.Scene.INTRO;
            changeScene();
        };
        return RunFindWayLeft;
    })(objects.Scene);
    scenes.RunFindWayLeft = RunFindWayLeft;
})(scenes || (scenes = {}));
//# sourceMappingURL=runFindWayLeft.js.map