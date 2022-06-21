import React from "react";

const AddTask = ({HandleChange, currentInputValue, onAddTask,errors}) => {
    return(
        <>
            <h1 className="title">TO DO LIST!</h1>
            <div className="input_div">
                {errors}
                <input placeholder='Write your task here' className='input'onChange={HandleChange} value={currentInputValue}/>
                <button className="add" style={{fontFamily: 'Open Sans'}}onClick={onAddTask} >Add</button>
            </div>
        </>
    )
}

export {AddTask}