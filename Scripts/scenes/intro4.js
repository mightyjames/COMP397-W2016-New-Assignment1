var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro4 = (function (_super) {
        __extends(Intro4, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro4() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro4.prototype.start = function () {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/Intro4.png");
            this.addChild(this._intro2Image);
            this._next = new objects.Button("NextButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._next);
            this._next.on("click", this._nextClick, this);
            this._back = new objects.Button("BackButton", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._back);
            this._back.on("click", this._backClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro4.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Intro4.prototype._nextClick = function (event) {
            scene = config.Scene.GAME;
            changeScene();
        };
        Intro4.prototype._backClick = function (event) {
            scene = config.Scene.INTRO3;
            changeScene();
        };
        return Intro4;
    })(objects.Scene);
    scenes.Intro4 = Intro4;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro4.js.map