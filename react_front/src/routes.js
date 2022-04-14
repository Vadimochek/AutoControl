import React from 'react'

const useRoutes = isAuth => {
    if (isAuth){
        return (
            <Routes>

            </Routes>
        )
    }

    return (
        <Routes>

        </Routes>
    )
}