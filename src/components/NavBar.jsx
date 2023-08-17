import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-title">Gallery Portal</div>
            <ul className="navbar-list">
                <li className="navbar-item">Home</li>
                <li className="navbar-item">About Us</li>
                <li className="navbar-item">Gallery</li>
                <li className="navbar-item">Contact</li>
            </ul>
        </nav>
        <CartWidget />
    </>
  )
}

export default NavBar