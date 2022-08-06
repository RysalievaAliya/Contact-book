import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../ContactContext";

const Edit = () => {
    const { contactToEdit, savedContact } = useContext(contactContext)

    const [editContact, setEditContact] = useState(contactToEdit)
    console.log(contactToEdit);

    useEffect(() => {
        setEditContact(contactToEdit)
    }, [contactToEdit])

    const navigate = useNavigate();

    const handleInp = (e) => {
        let obj = {
            ...editContact,
            [e.target.name]: e.target.value
        };
        setEditContact(obj)

    }

    return (
        <>
            {editContact ? (
                <Box sx={{ display: "flex", m: 3 }}>
                    <TextField
                        id="outlined-basic"
                        label="name"
                        variant="outlined"
                        name="name"
                        onChange={handleInp}
                        value={editContact.name || ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="number"
                        variant="outlined"
                        name="number"
                        onChange={handleInp}
                        value={editContact.number || ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="photo"
                        variant="outlined"
                        name="photo"
                        onChange={handleInp}
                        value={editContact.photo || ""}
                    />
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={() => {
                            savedContact(editContact);
                            setEditContact({ name: "", number: "", photo: "" });
                        }}
                    >
                        Add
                    </Button>
                </Box>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    );
};

export default Edit;