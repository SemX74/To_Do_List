import React, {useState} from "react";
import { TasksList } from "./components/TasksList";
import { AddTask } from "./components/AddTask"; 

export default function CreateTask() {
    const [errors, setErrors] = useState('')
    const [taskvalue, setTaskValue] = useState('')  
    const [currentInputValue, setCurrentInputValue] = useState('') // just for validation
    const HandleChange = ({target}) => {
        setTaskValue((prevTaskvalue) => target.value)
        setCurrentInputValue((prev) => target.value) 
    }
    
    const message = <p style = {{top: '15em',color:'red', position: 'absolute'}}>Write something in label first!</p>
    const [tasks,setTasks] = useState([])
    const onAddTask = () => {
        if(tasks.length < 15){
            if(currentInputValue === ''){
                setErrors(message)
            }else{
                setErrors('')
                setTasks((prevTasks) => [...prevTasks,taskvalue]) 
                setCurrentInputValue((prev) => '')
            }
        }else{
            alert('Hey! you gotta rest a lil bit ! :))')
        }
    }

    const onDelete = (idToRemove) => {
        const newTasks = [...tasks];
        newTasks.splice(idToRemove, 1);
        setTasks(newTasks);
    }
    
    return(
        <div>
            <AddTask 
            errors={errors}
            HandleChange={HandleChange}
            currentInputValue={currentInputValue}
            onAddTask={onAddTask}
            />
            <TasksList 
            tasks={tasks}
            onDelete={onDelete}
            />
        </div>
    )

}