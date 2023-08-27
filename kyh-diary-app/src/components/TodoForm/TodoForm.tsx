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

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    }

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
                onKeyPress={handleKeyPress}
                placeholder="새로운 할 일 입력"
            />
            {/* <button onClick={handleAddTodo}>추가</button> */}
        </div>
    )
}

export default TodoForm;