import React from 'react';
import TaskListContent from "./TaskListContent";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../features/TodoList";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.value)
    return (
        <div className='taskListStyle'>

            {tasks.map((x, i) => <TaskListContent x={x} i={i}/>)}

        </div>
    );
};

export default TaskList;