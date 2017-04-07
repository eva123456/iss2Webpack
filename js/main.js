'use strict';

import Area from './area.js';
import MenuPage from './menu.js';
import PlayPage from './play_page.js';
import World from './world.js';
import Loader from './loader.js';

export const RES_OK = 0;
export const RES_ROLLBACK = 1;
export const RES_ERROR = 2;

window.conf = {
    defaultStartUnit: 100,
    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 15
};

window.towerType = {
    DEFAULT: 0
};

(function (window) {
    let needFilesForProjectManifest = [
        {id: "playButton", src: "./img/play.png"}
    ];

    const startGame = function() {
        menuPage.stopPage();

        const run = function() {
            new PlayPage(world).startPage(null);
            world.update();
        };
        run();
        //  userService = new Connection(run);
    };

    let area = new Area();

    let world = new World(area);
    let menuPage = new MenuPage(world, startGame);

    new Loader(needFilesForProjectManifest, function(result) {
        console.log(result);

        menuPage.startPage(result);
    });

})(window);
