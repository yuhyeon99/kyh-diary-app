import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../state/todoState';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { addTodo, toggleTodoComplete, deleteTodo, useLocalStorage } from '../actions/todoActions';

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useRecoilState(todoState);

    // Todo 완료/미완료 체크 로직
    const handleTodoToggleComplete = (id: number) => {
       const updatedTodos = toggleTodoComplete(id, todos);
        setTodos(updatedTodos);
    };

    // Todo 삭제 로직
    const handleTodoDelete = (id: number) => {
        const updatedTodos = deleteTodo(id, todos);
        setTodos(updatedTodos);
    };

    // Todo 추가 로직
    const handleAddTodo = (text: string) => {
        const updatedTodos = addTodo(text, todos);
        setTodos(updatedTodos);
    };

    // Text 수정 로직
    const handleTextUpdate = (id: number, newText: string) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };

    useLocalStorage();

    return (
        <div>
            <h2>TODO List</h2>
            <TodoForm onAddTodo={handleAddTodo} />
            <ul>
                {todos.length === 0 ? (
                    // Todo List 가 비었을 때 레이아웃
                    <div>새로운 TODO LIST를 추가해보세요.</div>
                ) : (
                    todos.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo} 
                            onTodoToggleComplete={handleTodoToggleComplete}
                            onTodoDelete={handleTodoDelete}
                            onTextUpdate={handleTextUpdate}
                        />
                    ))
                )}
            </ul>
            {/* 새로운 할 일 추가 기능 */}
        </div>
    )
}
