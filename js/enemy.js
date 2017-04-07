'use strict'

import GameObject from './game_object.js'

export default class Enemy extends GameObject {
    constructor(world, point, nameUser) {
        super(world, point, nameUser);
        this.userCircle = null;
    }

    drawObject() {
        this.userCircle = this.world.newShape({
            x: this.positionRealX,
            y: this.positionRealY
        }, conf.userSize, color || "DeepSkyBlue");
    }

    animation(dx, dy) {
        this.positionRealX += dx;
        this.positionRealY += dy;
    }
};
