import React from "react";
// import { Box, Button, TextField } from "react-router-dom";
import { Box, Button, TextField } from '@mui/material'
import { useState } from "react";
import { useContext } from "react";
import { contactContext } from "../../ContactContext";

const Add = () => {

    const { addContact } = useContext(contactContext)

    const [contact, setContact] = useState({
        name: '',
        number: '',
        photo: ''
    })

    const handleInp = (e) => {
        let obj = {
            ...contact,
            [e.target.name]: e.target.value,
        }
        setContact(obj)
    }


    return (
        <Box sx={{ display: "flex", m: 3 }}>
            <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                name="name"
                onChange={handleInp}
                value={contact.name || ""}
            />
            <TextField
                id="outlined-basic"
                label="number"
                variant="outlined"
                name="number"
                onChange={handleInp}
                value={contact.number || ""}
            />
            <TextField
                id="outlined-basic"
                label="photo"
                variant="outlined"
                name="photo"
                onChange={handleInp}
                value={contact.photo || ""}
            />
            <Button
                variant="outlined"
                size="large"
                onClick={() => {
                    addContact(contact);
                    setContact({ name: "", number: "", photo: "" });
                }}
            >
                Add
            </Button>
        </Box>
    );
};

export default Add;