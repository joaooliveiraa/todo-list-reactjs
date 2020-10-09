import React, { createContext } from 'react';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [
        {
            id: 1,
            title: 'Ir mercado',
            done: true
        },
        {
            id: 2,
            title: 'Ir academia',
            done: false
        }
    ],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

//Deve ficar disponível para toda aplicação