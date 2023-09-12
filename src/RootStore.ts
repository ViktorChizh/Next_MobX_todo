import { makeAutoObservable } from "mobx";
import { TaskStore } from "./TaskStore";

export class RootStore {
    taskStore = new TaskStore()
    constructor() {makeAutoObservable(this)}
}