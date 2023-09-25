import React, { useState } from 'react';
import { Box, Center, Text } from "@chakra-ui/react";

const Form = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || surname === "" || email === "" || cardNumber === "" || date === "" || cvv === "" || address === "" || number === "") {
            alert("Please fill in all fields");
        } else {
            alert("Form submitted");
        }
    }

    return (
        <Center minH="100vh">
            <Box width="400px" padding="20px" ml='auto' mr='40' mt='120' >
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" required />
                        <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} className="input-field" required />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
                        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="input-field" maxLength={16} minLength={16} required />
                        <input type="text" placeholder="MM/AA" value={date} onChange={(e) => setDate(e.target.value)} className="input-field" required />
                        <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCVV(e.target.value)} className="input-field" maxLength={3} minLength={3} required />
                        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="input-field" required />
                        <input type="text" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)} className="input-field" required />
                        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className="input-field" />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </Box>
        </Center>
    );
}

export default Form;
