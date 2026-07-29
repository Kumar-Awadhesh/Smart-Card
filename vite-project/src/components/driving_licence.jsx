import { useState, useContext } from "react";
import { SmartCardContext } from "../context/smartCardContext";


const DrivingLicence = () => {

    const {licenceData, setLicenceData} = useContext(SmartCardContext)
    console.log(licenceData)


    return (
        <>
            <main className='container'>
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
                            <h4 className='licence-number'>{licenceData.licence_number}</h4>
                            <div className='issue-and-validity-container'>
                                <div>
                                    <p>Issue Date</p>
                                    <b>{licenceData.licence_issue_date}</b>
                                </div>
                                <div>
                                    <p>Validity ( NT )</p>
                                    <b>{licenceData.licence_validity}</b>
                                </div>
                                <div>
                                    <p>Validity ( TR )</p>
                                </div>
                            </div>
                        </div>
                        <div className='photo-and-sign-container'>
                            {
                                licenceData.holder_photo &&(
                                    <img className='photo' src={URL.createObjectURL(licenceData.holder_photo)} alt="" />
                                )
                            } <br />
                            {
                                licenceData.holder_signature && (
                                    <img className='sign' src={URL.createObjectURL(licenceData.holder_signature)} alt="" />
                                )
                            }
                        </div>
                        <div className="first-issue-container">
                            <p>Date of First Issue {licenceData.licence_issue_date}</p>
                        </div>
                    </div>
                    <div className='user-additional-info-container'>
                        <div className='name-and-sign-container'>
                            <div><p>Name :</p></div>
                            <div className='name-and-sign-seprator-container'>
                                <div><h4>{licenceData.name.toUpperCase()}</h4></div>
                                <div><p>Holder's Signature</p></div>
                            </div>
                        </div>
                        <div>
                            <div><p>Date Of Birth :</p></div>
                            <div><h4>{licenceData.date_of_birth}</h4></div>
                            <div><p>Blood Group: <b>O+</b></p></div>
                            <div><p>Organ Donor:</p></div>
                        </div>
                        <div>
                            <div><p>Son/Daughter/wife of :</p></div>
                            <div><h4>{licenceData.name_of_father.toUpperCase()}</h4></div>
                        </div>
                        <div>
                            <div className="address-container"><p>Address :</p></div>
                            <div>
                                <p>{licenceData.address.toUpperCase()}</p></div>
                        </div>
                    </div>
                </div>
                <div className='card-back-container'>
                    <h4 className='licence-number-back'>DL No. {licenceData.licence_number}</h4>
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
                                    <td>{licenceData.vehicle_code.split(" ")[0].toUpperCase()}</td>
                                    <td>{licenceData.licence_number.split(" ")[0].toUpperCase()}</td>
                                    <td>{licenceData.licence_issue_date}</td>
                                    <td>NT</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img className="car-icon" src="/images/car.png" alt="" /></td>
                                    <td>{licenceData.vehicle_code.split(" ")[1].toUpperCase()}</td>
                                    <td>{licenceData.licence_number.split(" ")[0].toUpperCase()}</td>
                                    <td>{licenceData.licence_issue_date}</td>
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
                            Mobile Number: {licenceData.mobile_number}
                        </p>
                        <div>
                            <p>Licence Authority</p>
                            <p>DTO, {licenceData.licence_authority.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DrivingLicence;