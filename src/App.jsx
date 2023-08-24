import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Hi! Welcome to Gallery Portal'} welcome={"Here you can find your favorite painting. It's amazing, go ahead, enjoy the experience."}
      about={"We are the first online store that offers shipping, security and speed in your purchase. Giving you the confidence that the paint will arrive at your home in perfect condition."}
      security={"We guarantee a perfect shipment of the painting. With all the care"}
      shipping={"Worldwide shipping"}
      quality={"100% authentic painting"}
      contact={"nicolasseia0@gmail.com"}/>
    </>
  )
}

export default App
