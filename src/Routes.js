import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KeyWordSearch from './pages/KeyWordSearch';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/profile/summary/:code' element={<KeyWordSearch />} ></Route>
        </Routes>
    )
}

export default AppRoutes;