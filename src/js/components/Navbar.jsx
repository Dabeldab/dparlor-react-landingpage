import react from "react"


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <p className="navbar-brand  text-light" href="#">React Site</p>
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">   
                                        </ul>
                            <div className="d-flex navbar-nav">
                                            <ul className="nav-item">
                                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                            </ul>
                                            <li className="nav-item ">
                                            <a className="nav-link text-light" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-light" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-light" href="#">Contact</a>
                                        </li>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}


export default Navbar