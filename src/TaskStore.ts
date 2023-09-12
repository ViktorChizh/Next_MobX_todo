import { getAllTasks, addTask, editTask, deleteTask } from "./api"
import { makeAutoObservable, runInAction } from "mobx"

export type ITask = {
    id: number | string
    title: string
    completed: boolean
}

export class TaskStore {

    constructor(){makeAutoObservable(this)}

    taskList: ITask[] = []

    getAllTaskAction = async () => {
        try {
            const tasks = await getAllTasks()
            runInAction( () => {
                this.taskList = tasks
            })
        } catch (e) {
            console.log('getAllTaskAction' + e)
        }
    }

    addTaskAction = async (title: string) => {
        try {
          const newTask =await addTask(title);
          runInAction( () => {
            this.taskList.push(newTask)
          })
        } catch (e) {
          console.log('addTask:' + e);
        };
      };

    editTaskAction = async (task: ITask) => {
        try {
            const editingTask = await editTask(task)
            runInAction(() =>{
                const index = this.taskList.findIndex(task => task.id === editingTask.id)
            if (index !== -1){
                    this.taskList[index] = editingTask
            }})
        } catch (e) {
            console.log('editTaskAction' + e)
        }
    }

    deleteTaskAction = async (id: number|string) => {
        try {
            await deleteTask(id)
        } catch (e) {
            console.log('deleteTaskAction' + e)
        }
    }
}