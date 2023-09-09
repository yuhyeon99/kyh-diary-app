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
                    <div className="edit-area">
                        <input
                            type="text"
                            value={editedText}
                            onChange={handleEditInputChange}
                        />
                    </div>
                    <div className="btn-area">
                        <img onClick={handleEditSave} src="/img/modify_complete.png" alt="modify_complete" />
                        <img onClick={() => onTodoDelete(todo.id)} src="/img/delete.png" alt="delete" />
                    </div>
                </>
            ) : (
                <>
                    <div className="check-area"><img onClick={() => onTodoToggleComplete(todo.id)} src={todo.completed ? "/img/complete.png" : "https://raw.githubusercontent.com/yuhyeon99/kyh-diary-app/main/public/img/incomplete.png"} alt="incomplete" /></div>
                    <div className="text-area">{todo.text}</div>
                    <div className="btn-area">
                        <img onClick={handleEditStart} src="/img/modify.png" alt="modify" />
                        <img onClick={() => onTodoDelete(todo.id)} src="/img/delete.png" alt="delete" />
                    </div>
                </>
            )}
        </li>
    )
}

export default TodoItem;