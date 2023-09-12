import { ITask } from "./TaskStore"

const API_URL = 'http://localhost:3001/tasks'

export const getAllTasks = async ():Promise<ITask[]> => {
    const res = await fetch(API_URL)
    const tasks = await res.json()
    return tasks
}

export const addTask = async (title: string): Promise<ITask> => {
    const res = await fetch(API_URL, {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      method: 'post',
      body: JSON.stringify({
        title: title,
        completed: false
      })
    })
    const newTask = await res.json()
    return newTask
  }

export const editTask = async (task: ITask): Promise<ITask>=>{
    const res = await fetch (`${API_URL}/${task.id}`, {
        headers: {'Content-type': 'application/json; charset = UTF-8'},
        method: 'PUT',
        body: JSON.stringify(task)
    })
    const editingTask = await res.json()
    return editingTask
}

export const deleteTask = async (id: number|string): Promise<void>=>{
    const res = await fetch (`${API_URL}/${id}`, {
        method: 'delete'
    })
}