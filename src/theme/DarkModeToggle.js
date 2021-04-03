/* Core */
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReactDarkModeToggle from 'react-dark-mode-toggle';

const darkModeToggleRef = document.getElementById('dark-mode-toggle');

export const DarkModeToggle = () => {
    const [theme, setTheme] = useState('dark');
    const [isVisible, setVisible] = useState(false);

    const switchTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
            setTheme('light');
        }
    };

    useEffect(() => {
        (async () => {
            const initialTheme = detectInitialTheme();
            setTheme(initialTheme);

            // TODO: add listener for OS-wide theme change.
        })();

        const timerId = setTimeout(() => {
            setVisible(true);
        }, 0);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return createPortal(
        <ReactDarkModeToggle
            onChange={switchTheme}
            checked={theme === 'dark'}
            className={`dark-mode-portal ${isVisible && 'visible'}`}
            size={50}
        />,
        darkModeToggleRef,
    );
};

/* Helpers */
function detectInitialTheme() {
    let initialTheme = 'light';

    const root = document.documentElement;

    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'dark') {
            initialTheme = 'dark';
        }
    } else if (!window.matchMedia) {
        return false; // ? matchMedia method not supported
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initialTheme = 'dark'; // ? OS theme identified as dark

        root.setAttribute('data-theme', initialTheme);
    }

    root.setAttribute('data-theme', initialTheme);

    return initialTheme;
}
