import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../state/todoState';

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useRecoilState(todoState);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>('');

    const handleTodoDelete = (id: number) => {
        // 할 일 삭제 로직
    };

    const handleTodoToggle = (id: number) => {
        // 할 일 체크 상태 변경 로직
    };

    const handleEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(event.target.value);
    };

    const handleTodoEditStart = (id: number, text: string) => {
        setEditingId(id);
        setEditedText(text);
    };

    const handleTodoEditSave = (id: number) => {
        const updateTodos = todos.map(todo => {
            if (todo.id === id){
                return { ...todo, text: editedText};
            }
            return todo;
        })

        setTodos(updateTodos);
        setEditingId(null);
        setEditedText('');
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>TODO List</h2>
            <ul>
                {todos.length === 0 ? (
                    // Todo List 가 비었을 때 레이아웃
                    <></>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id}>
                            {editingId === todo.id ? (
                                <>
                                    <input 
                                        type="text"
                                        value={editedText}
                                        onChange={handleEditInputChange}
                                    />
                                    <button onClick={() => handleTodoEditSave(todo.id)}>저장</button>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleTodoToggle(todo.id)}
                                    />
                                    {todo.text}
                                    <button onClick={() => handleTodoDelete(todo.id)}>삭제</button>
                                    <button onClick={() => handleTodoEditStart(todo.id, todo.text)}>수정</button>
                                </>
                            )}   
                        </li>
                    ))
                )}
            </ul>
            {/* 새로운 할 일 추가 기능 */}
        </div>
    )
}
