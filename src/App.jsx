import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CartWidget from "./components/NavBar/CartWidget";
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.jpg';




const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/home" element={<Home greeting={'Hi! Welcome to Gallery Portal'} welcome={"Here you can find your favorite painting. It's amazing, go ahead, enjoy the experience."} />} />
        <Route exact path="/about" element={<About about={"We are the first online store that offers shipping, security and speed in your purchase. Giving you the confidence that the paint will arrive at your home in perfect condition."}
          security={"We guarantee a perfect shipment of the painting. With all the care"}
          shipping={"Worldwide shipping"}
          quality={"100% authentic painting"} />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<ItemListContainer products={[{id: 1, title: "Waterfalls", description: "Beautiful waterfalls, that shine in your home.", price: 750, image: image1, category: "Landscapes"},
          {id: 2, title: "Sea", description: "A view that takes you to the beyond.", price: 650, image: image2, category: "Landscapes"},
          {id: 3, title: "Lake", description: "Immerse yourself in the forest.", price: 700, image: image3, category: "Forests"},
          {id: 4, title: "Field", description: "A view that takes you to the purest and most peaceful of places.", price: 600, image: image4, category: "Landscapes"},
          {id: 5, title: "Flowers", description: "A painting that sings just by looking at it.", price: 400, image: image5, category: "Others"}]} />} />
        <Route exact path="/category/:category" element={<ItemListContainer products={[{id: 1, title: "Waterfalls", description: "Beautiful waterfalls, that shine in your home.", price: 750, image: image1, category: "Landscapes"},
          {id: 2, title: "Sea", description: "A view that takes you to the beyond.", price: 650, image: image2, category: "Landscapes"},
          {id: 3, title: "Lake", description: "Immerse yourself in the forest.", price: 700, image: image3, category: "Forests"},
          {id: 4, title: "Field", description: "A view that takes you to the purest and most peaceful of places.", price: 600, image: image4, category: "Landscapes"},
          {id: 5, title: "Flowers", description: "A painting that sings just by looking at it.", price: 400, image: image5, category: "Others"}]} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer 
          products={[{id: 1, title: "Waterfalls", description: "Beautiful waterfalls, that shine in your home.", price: 750, image: image1, category: "Landscapes"},
          {id: 2, title: "Sea", description: "A view that takes you to the beyond.", price: 650, image: image2, category: "Landscapes"},
          {id: 3, title: "Lake", description: "Immerse yourself in the forest.", price: 700, image: image3, category: "Forests"},
          {id: 4, title: "Field", description: "A view that takes you to the purest and most peaceful of places.", price: 600, image: image4, category: "Landscapes"},
          {id: 5, title: "Flowers", description: "A painting that sings just by looking at it.", price: 400, image: image5, category: "Others"}]}/>} />
        <Route exact path="/cart" element={<CartWidget />} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
