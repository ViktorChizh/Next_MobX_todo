import classNames from "classnames";
import style from "./Container.module.css"
import React, { FC, ReactNode } from "react";

type ContainerType = {
    children: ReactNode
    className?: string
}

export const Container: FC<ContainerType>= ({children, className}) => {
    return (
        <div className={classNames(style.container, className)}>
            {children}
        </div>
    )}