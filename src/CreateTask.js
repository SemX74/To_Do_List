import React, {useState} from "react";
import TasksList from "./TasksList/TasksList";
import AddTask from "./AddTask/AddTask";

export default function CreateTask() {

    const [taskvalue, setTaskValue] = useState('')  
    const [currentInputValue, setCurrentInputValue] = useState('') // just for validation
    const HandleChange = ({target}) => {
        setTaskValue((prevTaskvalue) => target.value)
        setCurrentInputValue((prev) => target.value) 
    }
    
    const [tasks,setTasks] = useState([])
    const onAddTask = () => {
        if(tasks.length < 15){
            if(currentInputValue === ''){
                
                alert('Write something in label first!')
            }else{
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