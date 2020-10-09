import React from 'react';
import { getJSDocReturnTag } from 'typescript';
import NavBar from './NavBar';
import TodoList from './TodoList';
import TodoContext from '../contexts/TodoContext';

const App = () => {
    return (
        <TodoContext>
            <div className="uk-container">
                <NavBar></NavBar>
                <TodoList></TodoList>
            </div>

        </TodoContext>
    );
}

export default App;