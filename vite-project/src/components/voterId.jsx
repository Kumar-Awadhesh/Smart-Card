import { useState } from "react";


const VoterId = () => {



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
                        <div><img src="/images/voter-flag.png" alt="" /></div>
                    </div>
                    <div className="voter-body-container">
                        <div className="user-data-container">
                            <h4 className="epic-number">YHX1026487</h4>
                            <div className="user-photo-details-container">
                                <img src="" alt="" />
                                <div className="user-personal-data-container">
                                    <b>नाम: अभय कुमार </b><br />
                                    <b>Name: Abhay Kumar</b><br />
                                    <b>पिता का नाम: अभय कुमार </b><br />
                                    <b>Father's Name: Abhay Kumar</b><br />
                                    <b>लिंग / पुरुष /</b><br />
                                    <b>जन्म तिथि / उम्र:</b><br />
                                    <b>Date of Birth / Age:</b>
                                </div>
                                <p>
                                    <img src="" alt="" />
                                    <p>YHX1026487</p>
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
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <h4>YHX1026487</h4>
                        </div>
                        <div className="address-download-container">
                            <div className="address-container">
                                <p>
                                    ओसव क्कफ्फ्जेफ्जेफ़ न्व्दक्क्व द्क्वक्ज
                                    क्फफ्व्फ़ व्स्द्जेफ्जेफ़ व्न्दक्फ्ज न्फज्व्फ्व 
                                </p>
                                <p>
                                    fjefjeojgoegjogjeogjeogj
                                    kfkfkegegrkgkrrkhkkhsee
                                </p>
                            </div>
                            <div className="electoral-date-container">
                                <p>
                                    kgrgegjgojhhheeeehehheh
                                    gmrllhhldhmlmhelh
                                </p>
                                <p>Download Date-: 30-09-2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="voter-back-bottom-container">
                        <p>
                            <img src="/images/phone-call.png" alt="" />
                            <p>1950</p>
                        </p>
                        <p>
                            <img src="/images/globe.png" alt="" />
                            <p>https://ceobihar.nic.in/</p>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default VoterId;