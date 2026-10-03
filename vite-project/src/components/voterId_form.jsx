import { useState } from "react";


const VoterIdForm = () => {



    return (
        <>
            <main className="voterId-form-container">
                <h1 className="voter-form-header">Voter Id Application Form</h1>
                <div className="voter-front-form-container">
                    <div>
                        <div>
                            <h3>Epic Number:</h3>
                            <input type="text" placeholder="Enter epic number" />
                        </div>
                        <div>
                            <h3>Photo:</h3>
                            <input type="file" placeholder="Upload photo" />
                        </div>
                        <div>
                            <h3>नाम:</h3>
                            <input type="text" placeholder="नाम लिखें " />
                        </div>
                        <div>
                            <h3>Name:</h3>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <h3>पिता का नाम:</h3>
                            <input type="text" placeholder="पिता का नाम लिखें " />
                        </div>
                        <div>
                            <h3>Father's Name:</h3>
                            <input type="text" placeholder="Enter father's name" />
                        </div>
                        <div>
                            <h3>Gender:</h3>
                            <select className="gender-selection">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <h3>जन्म तिथि:</h3>
                        </div>
                        <div>
                            <h3>Date of Birth</h3>
                            <input type="date" placeholder="Enter date of birth" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default VoterIdForm;