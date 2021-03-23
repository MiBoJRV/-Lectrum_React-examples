// Intro to MobX with React

/* Core */
import { render } from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class TimerStore {
    secondsPassed = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.secondsPassed++;
    }

    reset() {
        this.secondsPassed = 0;
    }
}

const timerStore = new TimerStore();

/**
 * An observer HOC converts React components into derivations of the data they render.
 * When using MobX there are no smart or dumb components.
 * All components render smartly, but are defined in a dumb manner.
 * MobX will simply make sure the components are always re-rendered whenever needed, and never more than that.
 */
const Timer = observer(() => {
    return (
        <button onClick={() => timerStore.reset()}>
            Seconds passed: {timerStore.secondsPassed}
        </button>
    );
});
/**
 * The observer HoC automatically subscribes React components to any observables that are used during rendering.
 * As a result, components will automatically re-render when relevant observables change.
 * It also makes sure that components don't re-render when there are no relevant changes.
 * So, observables that are accessible by the component, but not actually read, won't ever cause a re-render.
 */

render(<Timer />, document.getElementById('root'));

setInterval(() => {
    timerStore.increment();
}, 1000);
