import { useState } from "react"

const NewDrivingLicence = () => {



    return(
        <>
            <main className="licence-container">
                <div className="form-container">
                    <div className="front-container">
                        <div>
                            <h4>Driving Licence :</h4>
                            <input type="text" placeholder="Enter Driving Licence Number" />
                        </div>
                        <div>
                            <h4>Issue Date :</h4>
                            <input type="date" placeholder="Select issue date"/>
                        </div>
                        <div>
                            <h4>validity :</h4>
                            <input type="date" placeholder="Select Validity date" />
                        </div>
                        <div>
                            <h4>Photo :</h4>
                            <input type="file" placeholder="Upload photo" />
                        </div>
                        <div>
                            <h4>Signature :</h4>
                            <input type="file" placeholder="Upload signature" />
                        </div>
                        <div>
                            <h4>Name :</h4>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <h4>Date of Birth :</h4>
                            <input type="date" placeholder="Select your date of birth" />
                        </div>
                        <div>
                            <h4>Father's Name</h4>
                            <input type="text" placeholder="Enter your father's name" />
                        </div>
                        <div>
                            <h4>Address :</h4>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>
                    <div className="back-container">

                    </div>
                </div>
            </main>
        </>
    )
}

export default NewDrivingLicence;