import React from 'react'

type Props = {
    children: React.ReactNode
}

const MainContainer = ({children}: Props) => {
    return (
        <div className=''>
            {children}
        </div>
    )
}

export default MainContainer