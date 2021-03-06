import { title } from 'process';
import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [

    ],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {

    const todos: Todo[] = [{
        id: 1,
        title: 'Ir mercado',
        done: true
    },
    {
        id: 2,
        title: 'Ir academia',
        done: false
    }];

    const addTodo = (title: string) => { 
        console.log('Adicionou:' + title);
    }

    const removeTodo = (todo: Todo) => { 
        console.log('Removeu' + todo.title);
    }

    const toggle = (todo: Todo) => { 
        console.log('Alterou' + todo.title);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}> 
            {props.children}
        </TodoContext.Provider> //Distribuir instancias da clase
    );
}
export default TodoProvider;

//Deve ficar disponível para toda aplicação