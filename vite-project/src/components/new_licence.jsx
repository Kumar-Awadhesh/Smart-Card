import { useState, useContext } from "react"
import { SmartCardContext } from "../context/smartCardContext"
import { useNavigate } from "react-router-dom"


const NewDrivingLicence = () => {
    const [userData, setUserData] = useState({
        name: "", name_of_father: "", date_of_birth: "", licence_number: "",
        licence_issue_date: "", licence_validity: "", holder_photo: "",
        holder_signature: "", vehicle_code: "", mobile_number: "", licence_authority: "",
        address: "",
    })

    const navigate = useNavigate()
    const {licenceData, setLicenceData} = useContext(SmartCardContext);


    const userRegistration = (data, value) => {
        setUserData(prev => ({...prev, [data]: value}))
    }


    const SubmitUserdata = () => {
        setLicenceData(userData);
        navigate("/driving-licence")
    }


    return(
        <>
            <main className="licence-container">
                <div className="form-container">
                    <div className="front-container">
                        <div>
                            <h4>Driving Licence Number :</h4>
                            <input type="text" placeholder="Enter Driving Licence Number" value={userData.licence_number} onChange={(e)=> userRegistration("licence_number", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Licence Issue Date :</h4>
                            <input type="date" placeholder="Select issue date" value={userData.licence_issue_date} onChange={(e)=> userRegistration("licence_issue_date", e.target.value)}/>
                        </div>
                        <div>
                            <h4> Licence Validity :</h4>
                            <input type="date" placeholder="Select Validity date" value={userData.licence_validity} onChange={(e)=> userRegistration("licence_validity", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Holder's Photo :</h4>
                            <input type="file" placeholder="Upload photo" accept="image/*" onChange={(e)=> userRegistration("holder_photo", e.target.files[0])} />
                        </div>
                        <div>
                            <h4>Holder's Signature :</h4>
                            <input type="file" placeholder="Upload signature" accept="/image/*" onChange={(e)=> userRegistration("holder_signature", e.target.files[0])}/>
                        </div>
                        <div>
                            <h4>Holder's Name :</h4>
                            <input type="text" placeholder="Enter your name" value={userData.name} onChange={(e)=> userRegistration("name", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Date of Birth :</h4>
                            <input type="date" placeholder="Select your date of birth" value={userData.date_of_birth} onChange={(e)=> userRegistration("date_of_birth", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Father's Name :</h4>
                            <input type="text" placeholder="Enter your father's name" value={userData.name_of_father} onChange={(e)=> userRegistration("name_of_father", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Address :</h4>
                            <textarea name="" id="" placeholder="Enter your address" value={userData.address} onChange={(e)=> userRegistration("address", e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="back-container">
                        <div>
                            <h4>Vehicle Code :</h4>
                            <input type="text" placeholder="Enter vehicle code" value={userData.vehicle_code} onChange={(e)=> userRegistration("vehicle_code", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Mobile Number :</h4>
                            <input type="number" placeholder="Enter your mobile number" value={userData.mobile_number} onChange={(e)=> userRegistration("mobile_number", e.target.value)}/>
                        </div>
                        <div>
                            <h4>Licence Authority :</h4>
                            <input type="text" placeholder="Enter licence authority name" value={userData.licence_authority} onChange={(e)=> userRegistration("licence_authority", e.target.value)}/>
                        </div>
                    </div>
                    <div className="submit-btn-container"><button onClick={SubmitUserdata}>Submit</button></div>
                </div>
            </main>
        </>
    )
}

export default NewDrivingLicence;