import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileSummary from './pages/ProfileSummary';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/profile/summary/:code' element={<ProfileSummary />} ></Route>
        </Routes>
    )
}

export default AppRoutes;