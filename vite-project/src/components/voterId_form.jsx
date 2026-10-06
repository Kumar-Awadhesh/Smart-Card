import { useState, useContext } from "react";
import { SmartCardContext } from "../context/smartCardContext";
import { useNavigate } from "react-router-dom";


const VoterIdForm = () => {
    const[userForm, setUserForm] = useState({
        epic_number: "", photo: "", name_hindi: "", name_english: "", fathers_name_hindi: "",
        fathers_name_english: "", gender: "", date_of_birth: "", blo_signature: "", qr_code: "",
        address_hindi: "", address_english: "", part_name_hindi: "", part_name_english: "",
        download_date: ""
    })

    const {voterData, setVoterData} = useContext(SmartCardContext);
    const navigate = useNavigate();


    const userData = (data, value) => {
        setUserForm(prev => ({...prev, [data]:value}))
    }


    const generateVoterId = () => {
        setVoterData(userForm);
        navigate("/voter_id");
    }


    return (
        <>
            <main className="voterId-form-container">
                <h1 className="voter-form-header">Voter Id Application Form</h1>
                <div className="voter-front-form-container">
                    <div>
                        <div>
                            <h3>Epic Number:</h3>
                            <input type="text" placeholder="Enter epic number" value={userForm.epic_number} onChange={(e)=> userData("epic_number", e.target.value)} />
                        </div>
                        <div>
                            <h3>Photo:</h3>
                            <input type="file" placeholder="Upload photo" accept="images/*" onChange={(e)=> userData("photo", e.target.files[0])} />
                        </div>
                        <div>
                            <h3>नाम:</h3>
                            <input type="text" placeholder="नाम लिखें" value={userForm.name_hindi} onChange={(e)=> userData("name_hindi", e.target.value)} />
                        </div>
                        <div>
                            <h3>Name:</h3>
                            <input type="text" placeholder="Enter your name" value={userForm.name_english} onChange={(e)=> userData("name_english", e.target.value)} />
                        </div>
                        <div>
                            <h3>पिता का नाम:</h3>
                            <input type="text" placeholder="पिता का नाम लिखें" value={userForm.fathers_name_hindi} onChange={(e)=> userData("fathers_name_hindi", e.target.value)} />
                        </div>
                        <div>
                            <h3>Father's Name:</h3>
                            <input type="text" placeholder="Enter father's name" value={userForm.fathers_name_english} onChange={(e)=> userData("fathers_name_english", e.target.value)} />
                        </div>
                        <div>
                            <h3>Gender:</h3>
                            <select className="gender-selection" value={userForm.gender} onChange={(e)=> userData("gender", e.target.value)}>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <h3>जन्म तिथि:</h3>
                        </div>
                        <div>
                            <h3>Date of Birth:</h3>
                            <input type="date" placeholder="Enter date of birth" value={userForm.date_of_birth} onChange={(e)=> userData("date_of_birth", e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>BLO Signature:</h3>
                            <input type="file" accept="images/*" onChange={(e)=> userData("blo_signature", e.target.files[0])} />
                        </div>
                        <div>
                            <h3>QR Code:</h3>
                            <input type="file" accept="images/*" onChange={(e)=> userData(qr_code, e.target.files[0])} />
                        </div>
                        <div>
                            <h3>पता:</h3>
                            <textarea type="text" placeholder="पता लिखें" value={userForm.address_hindi} onChange={(e)=> userData("address_hindi", e.target.value)} />
                        </div>
                        <div>
                            <h3>Address:</h3>
                            <textarea type="text" placeholder="Enter your address" value={userForm.address_english} onChange={(e)=> userData("address_english", e.target.value)} />
                        </div>
                        <div>
                            <h3>भाग का नाम और संख्या लिखें:</h3>
                            <input type="text" placeholder="भाग और भाग संख्या लिखें" value={userForm.part_name_hindi} onChange={(e)=> userData("part_name_hindi", e.target.value)} />
                        </div>
                        <div>
                            <h3>Part Name and Number:</h3>
                            <input type="text" placeholder="Enter your part and part number" value={userForm.part_name_english} onChange={(e)=> userData("part_name_english", e.target.value)} />
                        </div>
                        <div>
                            <h3>Download Date:</h3>
                            <input type="date" value={userForm.download_date} onChange={(e)=> userData("download_date", e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="voter-submit-btn-container"><button onClick={generateVoterId}>Submit</button></div>
            </main>
        </>
    )
}

export default VoterIdForm;