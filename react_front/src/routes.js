import React from 'react'
import { AutosPage } from './pages/AutosPage'
import { AccountPage } from './pages/AccountPage'
import { Link, Navigate, Route, Routes, } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'

const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Routes>
                <Route path="/autos/*" element={<AutosPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="*" element={<Navigate to="/autos" replace />}/>
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