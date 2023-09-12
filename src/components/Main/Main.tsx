'use client'
import { FC, useContext, useEffect } from "react"
import { RootStoreContext } from "@/app/RootProvider"
import { observer } from "mobx-react-lite"
import { TaskList } from "../Task/TaskList"
import style from './Main.module.css'

export const Main: FC = observer(() => {
    const {taskStore} = useContext(RootStoreContext)

    useEffect (() =>{
        taskStore.getAllTaskAction()
    }, [taskStore])

    return(
    <div className={style.main}>
    <TaskList tasks = {taskStore.taskList} />
    </div>
    )
})