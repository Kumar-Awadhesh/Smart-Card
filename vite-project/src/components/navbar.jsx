import { useNavigate } from "react-router-dom";


const Navbar = () => {



    const navigate = useNavigate();


    return(
        <>
            <main>
                <h1 className="header">Make it Smart</h1>
                <div className="navbar-container">
                    <div><h2 onClick={(e)=>navigate("/")}>Home</h2></div>
                    <div><h2 onClick={(e)=> navigate("/driving-licence-form")}>Driving Licence</h2></div>
                    <div><h2>Registration Card</h2></div>
                    <div><h2>Pan Card</h2></div>
                    <div><h2>Voter Id</h2></div>
                    <div><h2>About</h2></div>
                </div>
            </main>
        </>
    )
}

export default Navbar;