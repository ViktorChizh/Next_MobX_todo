import { metadata } from "@/app/layout"
import { FC } from "react"
import { AddTask } from "../Task/AddTask"
import style from './Header.module.css'

export const Header: FC = () =>{
    return (
        <div className={style.header}>
        <h1 className={style.h1}>{metadata.description}</h1>
        <AddTask />
        </div>
    )
}