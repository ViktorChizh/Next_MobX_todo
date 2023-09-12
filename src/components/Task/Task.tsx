import { FC, useContext, useState } from "react";
import { ITask } from "@/TaskStore";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import style from './Task.module.css'
import { useRouter } from "next/navigation";
import { RootStoreContext } from "@/app/RootProvider";
import { observer } from "mobx-react-lite";

type PropsTaskType = {
    task: ITask
}

export const Task: FC<PropsTaskType> = observer(({task})=>{
    const {taskStore} = useContext(RootStoreContext)
    const router = useRouter()

    const [openEdit, setOpenEdit] = useState<boolean>(false)
    const [openDelete, setOpenDelete] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(task.title)

    const EditTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        taskStore.editTaskAction({
            id: task.id,
            title: editTask,
            completed: task.completed
        })
        setOpenEdit(false)
        router.refresh()
    }

    const DeleteTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        taskStore.deleteTaskAction(task.id)
        setOpenDelete(false)
        router.refresh()
    }
    return <li className={style.task}>
        <p className={style.wrapperBtn}>{task.title}</p>
        <div className={style.wrapperBtn}>
            <Button typeBtn={"button"} classBtn={style.btn} onClick={() => setOpenEdit(true)}>EDIT</Button>
            <Popup  title="Edit task" open={openEdit} setOpen={setOpenEdit}>
                <Form nameBtn="Save edited task" onSubmit={ EditTaskHandler }>
                <Input id='input' className = {style.input} value={editTask}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTask(e.target.value)}/>
                </Form>
            </Popup>
            <Button typeBtn={"button"} classBtn={style.btn} onClick={() => setOpenDelete(true)}>DELETE</Button>
            <Popup  title="Delete task" open={openDelete} setOpen={setOpenDelete}>
                <Form nameBtn="Delete task" onSubmit={ DeleteTaskHandler }>
                    <p>Are you sure, that want to delete &quot;{task.title}&quot;?</p>
                </Form>
            </Popup>
            </div>
    </li>
})