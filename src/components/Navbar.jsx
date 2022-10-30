import logo from '../assets/logo.png'
function Navbar() {
    return (
        <nav>
            <div className="nav-left">
                <img src={ logo } alt="image logo"/>
                <h3 className="nav-left-heading">ReactFacts</h3>
            </div>
            <div className="nav-right">
                <h5 className="nav-right-heading">
                    React Course - Project 1
                </h5>
            </div>
        </nav>
    )

}

export default Navbar;