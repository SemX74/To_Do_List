import React from "react";

const TasksList = ({tasks, onDelete}) => {


    return(
        <ul>
            {tasks.map((item,id) => (
            <li className="tasks_container" key={id}>
                <div style={{borderRadius:'50px'}}className="rendered_div">
                    <button 
                    onClick={() =>onDelete(id)}
                    className='rendered_delete'
                    >✕</button>

                    <h3 className="rendered_task">{item}</h3>

                    <input 
                    type="checkbox"
                    className="rendered_checkbox"
                    ></input>
                </div> 
            </li>))}
        </ul>
    )
}

export {TasksList}