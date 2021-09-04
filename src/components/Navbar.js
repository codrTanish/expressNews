import React from 'react'
import { NavLink as Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    <img src="https://img.icons8.com/bubbles/50/000000/news.png" alt='logo'/>
                    ExpressNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
