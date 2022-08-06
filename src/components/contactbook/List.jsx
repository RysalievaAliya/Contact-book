import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { contactContext } from '../../ContactContext';
import Card from './Card';

const List = () => {
    const { contacts, getContacts } = useContext(contactContext);
    console.log(contacts);

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            Contact List
            {contacts?.map((item, i) => (
                <Card key={i} item={item} />
            ))}
        </Box>
    );
};

export default List;