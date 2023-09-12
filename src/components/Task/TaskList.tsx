import { FC } from "react"
import { ITask } from "@/TaskStore"
import { Task } from "./Task"
import style from './Task.module.css'

type PropsTaskListType = {
    tasks: ITask[]
}

export const TaskList: FC<PropsTaskListType> = ({tasks})=>{
    return <ul className={style.list}>
        {tasks.length > 0 ?
        tasks.map((task:ITask) => <Task key = {task.id} task = {task}/>) :
        <li className={style.noTask}>You do not have any tasks yet</li>}
    </ul>
}