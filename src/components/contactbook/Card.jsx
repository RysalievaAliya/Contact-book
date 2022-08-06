import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { contactContext } from '../../ContactContext';
import { Link } from 'react-router-dom';

const CardCont = ({ item }) => {

    const { deleteContact, editContact } = useContext(contactContext)

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.photo}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.number}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deleteContact(item.id)}>Delete</Button>
                <Link size="small" to="/edit">
                    <Button onClick={() => editContact(item.id)}>
                        Edit
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};
export default CardCont;