import React, { useContext } from 'react';
import { useState } from 'react';
import { contactContext } from '../ContactContext';
import Add from './contactbook/Add';
import List from './contactbook/List';

const Home = () => {

    const { home } = useContext(contactContext)
    console.log(home);

    return (
        <div>
            Home
            <Add />
            <List />
        </div>
    );
};

export default Home;