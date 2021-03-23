/**
 * Вынесение логики в кастомные хуки позволяет элегантным путём решить проблему,
 * которую пытались решить паттерны Higher Order Component и Render Props.
 */
import { render } from 'react-dom';

import { useStopwatch } from './hooks';

const Stopwatch = () => {
    const watch1 = useStopwatch();
    const watch2 = useStopwatch();

    const buttonText1 = watch1.isRunning ? '🏁 Стоп' : '🎬 Старт';
    const buttonText2 = watch2.isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <div className="stopwatch">
            <code>{watch1.lapse} мс</code>
            <button onClick={watch1.toggleRun}>{buttonText1}</button>
            <button onClick={watch1.clear}>Очистить</button>
            <b />
            <code className="difference">
                Разница: {watch1.lapse - watch2.lapse} мс
            </code>
            <b />
            <code>{watch2.lapse} мс</code>
            <button onClick={watch2.toggleRun}>{buttonText2}</button>
            <button onClick={watch2.clear}>Очистить</button>
        </div>
    );
};

render(<Stopwatch />, document.getElementById('root'));
