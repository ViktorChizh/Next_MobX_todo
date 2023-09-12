"use client"

import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { RootStoreContext } from "@/app/RootProvider";

import Input from "../Input/Input";
import Form from "../Form/Form";
import Popup from "../Popup/Popup";
import style from './Task.module.css'



export const AddTask: FC = observer(() => {
    const {taskStore} = useContext(RootStoreContext)
    const router = useRouter()

    const [open, setOpen] = useState<boolean>(false)
    const [newTask, setNewTask] = useState<string>('')

    const AddTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        taskStore.addTaskAction(newTask)
        setOpen(false)
        router.refresh()
    }
    return(
    <>
        <button type="button" className= {style.btn} onClick={() => {setOpen(true)}}>Add new Task   </button>
            <Popup  title={"Add new task"} open={open} setOpen={setOpen}>
                <Form nameBtn="Save task" onSubmit={ AddTaskHandler }>
                    <Input id='input' className = "{ style.input}" value={newTask}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}/>
                </Form>
            </Popup>

    </>
    )

})