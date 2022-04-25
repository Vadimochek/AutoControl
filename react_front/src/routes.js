import React from 'react'
import { OneMorePage } from './pages/OneMorePage'
import { Link, Navigate, Route, Routes, } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'

const useRoutes = isAuth => {
    if (isAuth) {
        console.log("yam");
        return (
            <Routes>
                <Route path="/onemore/*" element={<OneMorePage />} />
                <Route path="*" element={<Navigate to="/onemore" replace />}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    )
}

export default useRoutes;