import { atom } from 'recoil';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const getStoredTodos = (): Todo[] => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

export const todoState = atom<Todo[]>({
    key: 'todoState',
    default: getStoredTodos(),
});