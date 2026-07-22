const DrivingLicence = () => {



    return (
        <>
            <main className='container'>
                <h1>Make it Smart</h1>
                <div className='card-front-container'>
                    <div className='card-header-container'>
                        <div className='emblem-logo-container'>
                            <img src="/images/seek-logo.png" alt="" />
                        </div>
                        <div className='card-front-title-container'>
                            <h4>INDIAN UNION DRIVING LICENCE</h4>
                            <p>ISSUED BY GOVERNMENT OF BIHAR</p>
                        </div>
                        <div className='state-name-container'>
                            <b>BR</b>
                        </div>
                    </div>
                    <div className='user-personal-info-container'>
                        <div>
                            <h4 className='licence-number'>BR06 20260041648</h4>
                            <div className='issue-and-validity-container'>
                                <div>
                                    <p>Issue Date</p>
                                    <b>08-Jul-2026</b>
                                </div>
                                <div>
                                    <p>Validity ( NT )</p>
                                    <b>14-Feb-2043</b>
                                </div>
                                <div>
                                    <p>Validity ( TR )</p>
                                </div>
                            </div>
                        </div>
                        <div className='photo-and-sign-container'>
                            <img className='photo' src="/images/chandan-photo.jpeg" alt="" /><br />
                            <img className='sign' src="/images/chandan-sign.png" alt="" />
                        </div>
                        <div className="first-issue-container">
                            <p>Date of First Issue 08-07-2026</p>
                        </div>
                    </div>
                    <div className='user-additional-info-container'>
                        <div className='name-and-sign-container'>
                            <div><p>Name :</p></div>
                            <div className='name-and-sign-seprator-container'>
                                <div><h4>CHANDAN KUMAR</h4></div>
                                <div><p>Holder's Signature</p></div>
                            </div>
                        </div>
                        <div>
                            <div><p>Date Of Birth :</p></div>
                            <div><h4>15-02-2003</h4></div>
                            <div><p>Blood Group: <b>O+</b></p></div>
                            <div><p>Organ Donor:</p></div>
                        </div>
                        <div>
                            <div><p>Son/Daughter/wife of :</p></div>
                            <div><h4>GOPAL PRASAD SHARMA</h4></div>
                        </div>
                        <div>
                            <div><p>Address :</p></div>
                            <div>
                                <p>DADAR MANDI GULZARBAGH PATNA BIHAR, 800007</p></div>
                        </div>
                    </div>
                </div>
                <div className='card-back-container'>
                    <h4 className='licence-number-back'>DL No. BR06 20260041648</h4>
                    <div className='qr-container'>
                        <div className='qr-img-container'><img src="/images/chandan-kumar-qr.png" alt="" /></div>
                        <div className='regn-and-validity-container'>
                            <p className='regn-number'>ADPVEH No.(Regn.Numbers)</p>
                            <div>
                                <p>Hazardous validity</p>
                                <p>Hill Validity</p>
                            </div>
                        </div>
                    </div>
                    <div className='vehicle-class'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Class of Vehicle</th>
                                    <th>Code</th>
                                    <th>Issued by</th>
                                    <th>Date of Issue</th>
                                    <th>Vehicle Category</th>
                                    <th>Badge Number</th>
                                    <th>Badge Issued date</th>
                                    <th>Badge Issued by</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="bike-icon" src="/images/bike.png" alt="" /></td>
                                    <td>MCWG</td>
                                    <td>BR33</td>
                                    <td>08-Jul-2026</td>
                                    <td>NT</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img className="car-icon" src="/images/car.png" alt="" /></td>
                                    <td>LMV</td>
                                    <td>BR33</td>
                                    <td>08-Jul-2026</td>
                                    <td>NT</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="form-and-rule-container">
                            <p>FORM 7 Rule 16 (2)</p>
                        </div>
                    </div>
                    <div className='contact-container'>
                        <p>
                            Mobile Number: 9097422702
                        </p>
                        <div>
                            <p>Licence Authority</p>
                            <p>DTO, MUZAFFARPUR</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DrivingLicence;