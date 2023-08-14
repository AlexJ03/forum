import { makeAutoObservable, toJS } from "mobx";
import type { IDiscussion } from "@types";

class Discussions {
    discussions: IDiscussion[];

    constructor() {
        makeAutoObservable( this );
    }

    setDiscussions( discussions: IDiscussion[] ) {
        this.discussions = discussions;
    }

    getDiscussions(): IDiscussion[] {
        return toJS( this.discussions );
    }
}

export const discussions = new Discussions();