


const PanForm = () => {



    return (
        <main>
            <h1 className="pan-header">Pan Form</h1>
            <div className="pan-form-container">
                <div>
                    <h2>Pan Number :</h2>
                    <input type="text" placeholder="Enter pan number" />
                </div>
                <div>
                    <h2>Upload Photo :</h2>
                    <input type="file" />
                </div>
                <div>
                    <h2>Full Name :</h2>
                    <input type="text" placeholder="Enter full name" />
                </div>
                <div>
                    <h2>Father's Name :</h2>
                    <input type="text" placeholder="Enter father's name" />
                </div>
                <div>
                    <h2>Date of birth :</h2>
                    <input type="date" />
                </div>
                <div>
                    <h2>Upload Signature :</h2>
                    <input type="file" />
                </div>
                <div className="btn-container">
                    <button>Submit</button>
                </div>
            </div>
        </main>
    )
}

export default PanForm;