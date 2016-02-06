var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Game() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Game.prototype.start = function () {
            // add Intro Image
            this._intro2Image = new createjs.Bitmap("../../Assets/images/game.png");
            this.addChild(this._intro2Image);
            this._right = new objects.Button("RightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._right);
            this._right.on("click", this._nextClick, this);
            this._left = new objects.Button("LeftButton", config.Screen.CENTER_X - 170, config.Screen.CENTER_Y + 180);
            this.addChild(this._left);
            this._left.on("click", this._backClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Game.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Game.prototype._nextClick = function (event) {
            scene = config.Scene.RIGHT_FOREST;
            changeScene();
        };
        Game.prototype._backClick = function (event) {
            scene = config.Scene.LEFT_FOREST;
            changeScene();
        };
        return Game;
    })(objects.Scene);
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map