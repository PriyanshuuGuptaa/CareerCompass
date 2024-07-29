import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KeyWordSearch from './pages/KeyWordSearch';

function Routes() {
    return (
        <Routes>
            <Route path='/keyword_search' element={KeyWordSearch} />
        </Routes>
    )
}

export default Routes;