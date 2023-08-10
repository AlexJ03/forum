import { makeAutoObservable, toJS } from "mobx";

class Discussions {
    discussions: any;

    constructor() {
        makeAutoObservable( this );
    }

    setDiscussions( discussions: any ) {
        this.discussions = discussions;
    }

    getDiscussions() {
        return toJS( this.discussions );
    }
}

export const discussions = new Discussions();