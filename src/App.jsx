import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext"


const App = () => {
  return (
    <>

      <ShoppingCartContext>

        <BrowserRouter>
        
          <NavBar />

          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/form" element={<Form />} />

          </Routes>
          
        </BrowserRouter>

      </ShoppingCartContext>

    </>
  )
}

export default App
