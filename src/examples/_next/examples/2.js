/**
 * Хук useState возвращает массив из двух элементов.
 * Первый элемент содержит значение данной ячейки состояния.
 * Второй элемент содержит функция для изменения значения данной ячейки состояния.
 *
 * При вызове такой функции-апдейтера происходит обновление состояния компонента и его перерендер.
 * Если при вызове функции-апдейтера состояние не изменилось, то перерендера не будет.
 *
 * Аргумент useState(argument) — это изначальное значения для данной ячейки состояния.
 */
import { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log('🖥 Рендер!', count);

    return (
        <section className="counter">
            <h1>Счётчик: {count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Обнулить</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('root'));
