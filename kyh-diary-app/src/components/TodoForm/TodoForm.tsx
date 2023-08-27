import React, { useState } from 'react';
import './TodoForm.css';

interface TodoFormProps {
    onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoText(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodoText.trim() !== ''){
            onAddTodo(newTodoText);
            setNewTodoText('');
        }
    }
    
    return (
        <div className="todo-form">
            <input 
                type="text"
                value={newTodoText}
                onChange={handleInputChange}
                placeholder="새로운 할 일 입력"
            />
            <button onClick={handleAddTodo}>추가</button>
        </div>
    )
}

export default TodoForm;