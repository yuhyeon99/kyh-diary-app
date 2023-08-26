import { Todo } from '../types/types';
import { useRecoilValue } from 'recoil';
import { todoState } from '../state/todoState';

export const addTodo = (text: string, todos: Todo[]):Todo[] => {
    const newTodo = {
        id: new Date().getTime(),
        text,
        completed: false,
    };
    const updatedTodos = [...todos, newTodo];

    return updatedTodos
}

export const toggleTodoComplete = (id: number, todos: Todo[]):Todo[] => {
    const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    return updatedTodos;
};

export const deleteTodo = (id: number, todos: Todo[]):Todo[] => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    return updatedTodos;
};

// 추가된 코드: todos 상태가 변경될 때마다 localStorage에 반영
export const useLocalStorage = () => {
    const todos = useRecoilValue(todoState);
    localStorage.setItem('todos', JSON.stringify(todos));
};