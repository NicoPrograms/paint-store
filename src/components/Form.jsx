import React, { useContext, useState } from 'react';
import { Box, Center, Text, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { CartContext } from '../context/ShoppingCartContext';

const Form = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvv, setCVV] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [department, setDepartment] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    const { cart, cleanCart} = useContext(CartContext)

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || surname === "" || email === "" || cardNumber === "" || date === "" || cvv === "" || address === "" || number === "") {
            alert("Please fill in all fields")
        } else {
            addDoc(ordersCollection, order).then(({id}) => {
                setOrderId(id)
                setShowAlert(true)
            });
        }
        cleanCart();
    }

    const order = {
        buyer: {name, surname, email, address, number, department},
        items: cart.map((item) => ({
            id: item.product.id, 
            title: item.product.title, 
            price: item.product.price, 
            quantity: item.quantity
        })),
    }

    const ordersCollection = collection(db, "order")

    return (
        <Center minH="100vh">
            <Box width="400px" mt='120'>
                <Center><Text fontStyle='oblique' textDecoration='underline' mb='10'>Fill in the form to complete the order</Text></Center>
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
                    <Center><button type="submit" className="submit-button">Submit</button></Center>
                </form>
                {showAlert && ( 
                    <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Buy submitted!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            Thanks for buying in GalleryPortal. Your order id is: {orderId}.
                        </AlertDescription>
                    </Alert>
                )}
            </Box>
        </Center>
    );
}

export default Form;
