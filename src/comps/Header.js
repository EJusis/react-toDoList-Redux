import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../features/TodoList";

const Header = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.value)
    const taskInput = useRef()

    function addNewTask() {
        const newTask = taskInput.current.value
        dispatch(addTask(newTask))
        taskInput.current.value = ''
    }

    return (
        <div className='headerStyle'>
            <input type="text" ref={taskInput}/>
            <button onClick={addNewTask}>Add</button>
        </div>
    );
};

export default Header;