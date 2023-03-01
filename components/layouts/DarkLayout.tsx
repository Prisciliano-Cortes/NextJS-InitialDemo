import { ReactNode } from "react"

interface propsWithChildren {
    children: ReactNode
}

export const DarkLayout = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <div style={{
            backgroundColor: 'red',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <div>
                { children }
            </div>
        </div>
    )
}
