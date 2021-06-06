// Core
import React from 'react';
import { Navigate, Route, Routes, Outlet, NavLink } from 'react-router-dom';

// Components
import { Todos } from './Todos';
import { About } from './About';

// Other
import { routes } from '../configs/routes';

// Styles
import '../styles/mains.scss';

export const App = () => {
    return (
        <section className='wrapper'>
            <nav className='navigation'>
                <NavLink
                    className='link'
                    activeClassName='active'
                    to={routes.todos.path} >
                    Задачи
                </NavLink>

                <NavLink
                    className='link'
                    activeClassName='active'
                    to={routes.about.path} >
                    О компании
                </NavLink>
            </nav>

            <h1 className='header'>Начинаем погружение в SSR</h1>

            <Routes>
                <Route path = {routes.root.path} element = { <Outlet/> } >
                    <Route path = {routes.root.path} element = { <routes.todos.component /> } />
                    <Route path = {routes.todos.path} element = { <routes.todos.component /> } />
                </Route>
                <Route path = {routes.about.path} element = { <routes.about.component /> } />

                <Route path = '*' element = { <Navigate to = {routes.todos.path} replace /> } />
            </Routes>

            <Outlet />
        </section>
    );
};
