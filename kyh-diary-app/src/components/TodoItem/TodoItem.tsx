import React, { useState } from 'react';
import { Todo } from '../../types/types';
import './TodoItem.css';

interface TodoProps{
    todo: Todo;
    onTodoToggleComplete: (id: number) => void;
    onTodoDelete: (id: number) => void;
    onTextUpdate: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, onTodoToggleComplete, onTodoDelete, onTextUpdate }) => {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(event.target.value);
    }

    const handleEditStart = () => {
        setEditedText(todo.text);
        setEditing(true);
    }

    const handleEditSave = () => {
        if (editedText.trim() !== '') {
            onTextUpdate(todo.id, editedText); // 수정된 텍스트를 상위 컴포넌트로 전달
            setEditing(false);
        }
    };
    return (
        <li>
            {editing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleEditInputChange}
                    />
                    <button onClick={handleEditSave}>저장</button>
                </>
            ) : (
                <>
                    <div>{todo.text}</div>
                    <div>
                        <img onClick={() => onTodoToggleComplete(todo.id)} src={todo.completed ? "/img/incomplete.png" : "/img/complete_2.png"} alt="incomplete" />
                        <button onClick={handleEditStart}>수정</button>
                        <button onClick={() => onTodoDelete(todo.id)}>삭제</button>
                    </div>
                </>
            )}
        </li>
    )
}

export default TodoItem;