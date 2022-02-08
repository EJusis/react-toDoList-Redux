import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {removeTask} from "../features/TodoList";

const TaskListContent = ({ x, i }) => {
    const [getColor, setColor] = useState(false)
    const dispatch = useDispatch()


    function remove (index) {
        dispatch(removeTask({index}))
    }

    function taskTrigger () {
        setColor(!getColor)
    }

    console.log(getColor)

    return (
        <>
            <div className='taskContentStyle' key={i} style={{backgroundColor: getColor && 'green'}}>
                <h3>{x}</h3>
                <div className='func'>
                    <input type="checkbox" onChange={() => taskTrigger()} />
                    <button onClick={() => remove(i)}>Delete</button>
                </div>
            </div>
        </>

    );
};

export default TaskListContent;