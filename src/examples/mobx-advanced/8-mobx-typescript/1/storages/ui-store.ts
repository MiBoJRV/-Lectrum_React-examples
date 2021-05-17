// Core
import { makeAutoObservable } from 'mobx';

export enum Statuses {
    'IDLE'= 'IDLE',
    'IN_PROGRESS'= 'IN_PROGRESS',
    'STARTED'= 'STARTED',
    'FINISHED'= 'FINISHED',
    'ERROR'= 'ERROR',
}

export interface IUiStore {
    isLoading: Statuses;
    setStatus: (status: Statuses) => void
}

export class UiStore implements IUiStore {
    isLoading: Statuses = Statuses.IDLE;

    constructor() {
        makeAutoObservable(this);
    }

    setStatus(status: Statuses): void {
        if (typeof status !== 'string') {
            throw new Error('статус должен быть строкой');
        }

        this.isLoading = status;
    }
}
