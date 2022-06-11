import React from "react";

export default function AddTask({HandleChange, currentInputValue, onAddTask}){
    return(
        <>
            <h1 className="title">TO DO LIST!</h1>
            <div className="input_div">
                <input placeholder='Write your task here' className='input'onChange={HandleChange} value={currentInputValue}/>
                <button className="add" style={{fontFamily: 'Open Sans'}}onClick={onAddTask} >Add</button>
            </div>
        </>
    )
}