'use strict';

import BasePage from './base_page.js';
import User from './user.js';
import RES_OK from './main.js';

export default class PlayPage extends BasePage {
    constructor(world) {
        super(world);
        /*
         this.userService = userService;
         this.userService.eventReceive = this.updateAllUsers.bind(this);
         */


        this.enemies = [];
        this.user = null;

        this.connection = null;
        this.resource = null;
    }


    startPage(connection, resource) {
        // if(connection === null)
        //    return RES_ERROR;


        this.connection = connection;
        this.resource = resource;

        this.initScene("player1");

        return RES_OK;
    }

    initScene(nameUser) {
        // TODO get position from server
        this.user = new User(null, this.world, {x: 3, y: 3}, nameUser || "Wonder");
    }

    updateAllUsers(json) {
        // TODO Noraml method`
        /*
        console.log("receive");
        let objects = json["newUsersPositions"];
        for (let key in objects) {
            console.log(objects[key]["NewPoint"]["x"]);
            console.log(objects[key]["NewPoint"]["y"]);
            this.enemies.push(new User(this.world, {
                x: objects[key]["NewPoint"]["x"],
                y: objects[key]["NewPoint"]["y"]
            }));
        }
        */
    }
};
