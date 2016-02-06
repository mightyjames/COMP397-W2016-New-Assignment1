var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.INTRO2 = 2;
        Scene.INTRO3 = 3;
        Scene.INTRO4 = 4;
        Scene.GAME = 5;
        Scene.LEFT_FOREST = 6;
        Scene.RIGHT_FOREST = 7;
        Scene.FIGHT_LEFT = 8;
        Scene.FIGHT_RIGHT = 9;
        Scene.FINISH_ALL_LEFT = 10;
        Scene.FINISH_ALL_RIGHT = 11;
        Scene.FINISH_HALF_LEFT = 12;
        Scene.FINISH_HALF_RIGHT = 13;
        Scene.RUN_LEFT = 14;
        Scene.RUN_RIGHT = 15;
        Scene.RUN_FIGHT_LEFT = 16;
        Scene.RUN_FIGHT_RIGHT = 17;
        Scene.RUN_FIND_WAY_LEFT = 18;
        Scene.RUN_FIND_WAY_RIGHT = 19;
        Scene.BOSS_FIGHT_LEFT1 = 20;
        Scene.BOSS_FIGHT_LEFT2 = 21;
        Scene.BOSS_FIGHT_RIGHT1 = 22;
        Scene.BOSS_FIGHT_RIGHT2 = 23;
        Scene.BOSS_FIGHT_RIGHT3 = 24;
        Scene.BOSS_FIGHT_RIGHT4 = 25;
        Scene.SAVE_PRINCESS = 26;
        Scene.FINISH_HALF_RIGHT_FAIL = 27;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map