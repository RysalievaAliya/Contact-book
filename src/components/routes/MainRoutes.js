import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from '../contactbook/Edit';
import Home from '../Home';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit' element={<Edit />} />
        </Routes>
    );
};

export default MainRoutes;