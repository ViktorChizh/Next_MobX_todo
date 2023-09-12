'use client'

import { RootStore } from "@/RootStore";
import React, { FC, createContext } from "react";


export const RootStoreContext = createContext ({} as RootStore)

type RootProviderType = {
    children: React.ReactNode
}

export const RootProvider: FC<RootProviderType> = ({children}) => {
    return (
        <RootStoreContext.Provider value = {new RootStore}>
            {children}
        </RootStoreContext.Provider>
    )}