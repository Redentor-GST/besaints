import React, { ReactNode, createContext, useState } from 'react'

export const GlobalContext = createContext({} as GlobalContextProps)

export const GlobalContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [user, setUser] = useState<User>()

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}
