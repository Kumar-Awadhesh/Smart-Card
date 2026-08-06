import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const navigate = useNavigate();


    const changeNavState = () => {
        navbar ? setNavbar(false) : setNavbar(true)
    }


    return (
        <>
            <main>
                <h1 className="header">Make it Smart</h1>

                <div className="navbar-container">
                    <div><h2 onClick={(e) => navigate("/")}>Home</h2></div>
                    <div><h2 onClick={(e) => navigate("/driving-licence-form")}>Driving Licence</h2></div>
                    <div><h2>Registration Card</h2></div>
                    <div><h2>Pan Card</h2></div>
                    <div><h2>Voter Id</h2></div>
                    <div><h2>About</h2></div>
                </div>
                <h2 className="menu">
                    <p onClick={changeNavState}>=</p>
                </h2>
                {
                    navbar &&
                    <div className="mobile-navbar-container">

                        <div className="mobile-navbar">
                            <div><h4 onClick={() => {
                                setNavbar(false);
                                navigate("/");
                            }}>Home</h4></div>
                            <div><h4 onClick={(e) => {
                                setNavbar(false);
                                navigate("/driving-licence-form")
                            }}>Driving Licence</h4></div>
                            <div><h4>Registration Card</h4></div>
                            <div><h4>Pan Card</h4></div>
                            <div><h4>Voter Id</h4></div>
                            <div><h4>About</h4></div>
                        </div>
                    </div>
                }
            </main>
        </>
    )
}

export default Navbar;