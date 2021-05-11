// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    title = 'Текст задачи';

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false });
    }

    setTitle(value) {
        this.title = value;
    }
};
