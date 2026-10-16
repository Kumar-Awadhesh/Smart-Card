import { useState, useContext } from "react";
import { SmartCardContext } from "../context/smartCardContext";
import {QRCodeSVG} from "qrcode.react"


const VoterId = () => {



    const {voterData, setVoterData} = useContext(SmartCardContext);

   
    const user = {
        epic: voterData.epic_number,
        name: voterData.name_english,
        fathersName: voterData.fathers_name_english,
        dateOfBirth: voterData.date_of_birth,
        address: voterData.address_english
    }
   


    return(
        <>
            <main className="voterid-container smooth-navigation">
                <div className="voter-front-container smooth-navigation">
                    <div className="voter-header-container">
                        <div><img src="/images/emblem.png" alt="" /></div>
                        <div>
                            <h4>भारत निर्वाचन आयोग</h4>
                            <h4>ELECTION COMMISSION OF INDIA</h4>
                        </div>
                        <div><img src="images/voter-flag.png" alt="" /></div>
                    </div>
                    <div className="voter-body-container">
                        <div className="user-data-container">
                            <h4 className="epic-number">{voterData?.epic_number}</h4>
                            <div className="user-photo-details-container">
                                {
                                    voterData?.photo && (
                                        <img src={URL?.createObjectURL(voterData?.photo)} alt="" />
                                    )
                                }
                                <div className="user-personal-data-container">
                                    <b>नाम: {voterData?.name_hindi} </b><br />
                                    <b>Name: {voterData?.name_english}</b><br />
                                    <b>पिता का नाम: {voterData?.fathers_name_hindi} </b><br />
                                    <b>Father's Name: {voterData?.fathers_name_english} </b><br />
                                    <b>लिंग / Gender: {voterData?.gender} /</b><br />
                                    <b>जन्म तिथि / उम्र:  </b><br />
                                    <b>Date of Birth / Age: {voterData?.date_of_birth} </b>
                                </div>
                                <p className="mini-photo-container">
                                    {
                                        voterData?.photo && (
                                            <img src={URL?.createObjectURL(voterData?.photo)} alt="" />
                                        )
                                    }
                                    {
                                        voterData?.epic_number && (
                                            <b className="small-epic-number">{voterData?.epic_number}</b>                    
                                        )
                                    }
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="voter-front-bottom-container">
                        <p>e-Electors Photo Identity Card - ई-मतदाता पहचान पत्र </p>
                    </div>
                </div>
                <div className="voter-back-container">
                    <div className="user-address-qr-container">
                        <div className="sign-qr-epic-container">
                            {
                                voterData?.blo_signature &&  (
                                    <img src={URL?.createObjectURL(voterData?.blo_signature)} alt="" />
                                )
                            } <br />
                            {
                                voterData.name_english && (
                                    <QRCodeSVG value={JSON.stringify(user)} size={75} />
                                
                                )
                            }
                            <h4>{voterData?.epic_number}</h4>
                        </div>
                        <div className="address-download-container">
                            <div className="address-container">
                                <p>पता: {voterData?.address_hindi}</p>
                                <p>Address: {voterData?.address_english}</p>
                            </div>
                            <div className="electoral-date-container">
                                <p>{voterData?.part_name_hindi}</p>
                                <p>{voterData?.part_name_english}</p>
                                <p>Download Date-: {voterData?.download_date} </p>
                            </div>
                        </div>
                    </div>
                    <div className="voter-back-bottom-container">
                        <p>
                            <img src="images/phone-call.png" alt="" />
                            <b>1950</b>
                        </p>
                        <p>
                            <img src="images/globe.png" alt="" />
                            <b>httbs://ceobihar.nic.in/</b>
                        </p>
                    </div>
                </div>
                <div className="voter-submit-btn-container"><button onClick={(()=>{window.print()})}>Submit</button></div>
            </main>
        </>
    )
}

export default VoterId;