import { useState, useContext } from "react";
import { SmartCardContext } from "../context/smartCardContext";



const PanForm = () => {
    const [panData, setPanData] = useState({
        "pan_number": "", "photo": "", "name": "", "father_name": "", "date_of_birth": "",
        "signature": ""
    })

    const {licenceData, setLicenceData, voterData, setVoterData, panCardData, setPanCardData} = useContext(SmartCardContext);


    const panFormData = (data, value) => {
        setPanCardData((prev)=> ({...prev, [data]: value}))
    }

    const panFormSubmission = () => {
        
    }


    return (
        <main>
            <h1 className="pan-header">Pan Form</h1>
            <div className="pan-form-container">
                <div>
                    <h2>Pan Number :</h2>
                    <input type="text" placeholder="Enter pan number" value={panData.pan_number} onChange={(e)=> panFormData("pan_number", e.target.value)} />
                </div>
                <div>
                    <h2>Upload Photo :</h2>
                    <input type="file" accept="image/*" onChange={(e)=> panData("photo", e.target.files[0])} />
                </div>
                <div>
                    <h2>Full Name :</h2>
                    <input type="text" placeholder="Enter full name" value={panData.name} onChange={(e)=> panFormData(e.target.value)} />
                </div>
                <div>
                    <h2>Father's Name :</h2>
                    <input type="text" placeholder="Enter father's name" value={panData.father_name} onChange={(e)=> panFormData("father_name", e.target.value)} />
                </div>
                <div>
                    <h2>Date of birth :</h2>
                    <input type="date" value={panData.date_of_birth} onChange={(e)=> panFormData("date_of_birth", e.target.value)} />
                </div>
                <div>
                    <h2>Upload Signature :</h2>
                    <input type="file" accept="image/*" onChange={(e)=> panFormData("signature", e.target.files[0])} />
                </div>
                <div className="btn-container">
                    <button onClick={panFormSubmission}>Submit</button>
                </div>
            </div>
        </main>
    )
}

export default PanForm;