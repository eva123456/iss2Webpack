'use strict';

export default class UserAction {
    constructor(connection) {
        this.connection = connection;
        this.cientId = null;
    }

    setStart(world, clientId) {
        this.clientId = clientId;
    }

    createTown(world, to) {
        if(this.clientId === null)
            return;

    }

    setStop(world) {

    }
};

