import './navbar.css'

// NAVBAR COMPONENT 
function Navbar() {
    return (
        <div className="navbar" > 
            <div className="shoe-brand">
                <a href="/">.SHoe</a>
            </div>
            <div className="search-div">
                <i className="fas fa-search"/>
                <input type="text" className="search" placeholder="Blue Sneakers" >
                    
                </input>
            </div>
        </div>
    )
}

export default Navbar
