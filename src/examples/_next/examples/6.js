/**
 * Коллбек хука useEffect возвращает функцию.
 * Эта функция предназначена для «зачистки» логики сайд-эффекта.
 * Например для зачистки таймеров или подписок.
 * Поэтому эту функцию можно называть «функция-очиститель», или «функция для клиринга».
 *
 * В данном примере хук useEffect выполняет регистрацию
 * нового таймера при первом рендере, а также
 * при каждом новом рендере.
 *
 * Функция-очиститель выполнится в двух случаях:
 * 1. При повторном рендере: чтобы очистить предыдущий таймер перед регистрацией нового;
 * 2. Перед удалением компонента из DOM: чтобы избежать утечки памяти.
 */
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);

    useEffect(() => {
        const timer = setTimeout(increment, 1000);

        console.log('⏳ useEffect');

        return () => {
            console.log('⌛️ Очистка!');

            clearTimeout(timer);
        };
    });

    console.log('🖥 Рендер!');

    return (
        <section className="counter">
            <h1>Счётчик: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Обнулить</button>
            <button onClick={increment}>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('root'));
