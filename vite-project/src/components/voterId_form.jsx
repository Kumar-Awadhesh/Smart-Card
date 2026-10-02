import { useState } from "react";


const VoterIdForm = () => {



    return (
        <>
            <main className="voterId-form-container">
                <div className="voter-front-form-container">
                    <div>
                        <h3>Epic Number:</h3>
                        <h3>Photo:</h3>
                        <h3>नाम:</h3>
                        <h3>Name:</h3>
                        <h3>पिता का नाम:</h3>
                        <h3>Father's Name:</h3>
                        <h3>Gender:</h3>
                        <h3>जन्म तिथि:</h3>
                        <h3>Date of Birth</h3>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter epic number" /><br />
                        <input type="file" placeholder="Upload photo" /><br />
                        <input type="text" placeholder="नाम लिखें " /><br />
                        <input type="text" placeholder="Enter your name" /><br />
                        <input type="text" placeholder="पिता का नाम लिखें " /><br />
                        <input type="text" placeholder="Enter father's name" /><br />
                        <select className="gender-selection">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select><br />
                        <input type="date" placeholder="Enter date of birth" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default VoterIdForm;