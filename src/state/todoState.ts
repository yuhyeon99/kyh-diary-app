import { atom } from 'recoil';
import { Todo } from '../types/types';

const getStoredTodos = (): Todo[] => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

export const todoState = atom<Todo[]>({
    key: 'todoState',
    default: getStoredTodos(),
});