import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
              <h4 className='licence-number'>BR33 20260024700</h4>
              <div className='issue-and-validity-container'>
                <div>
                  <p>Issue Date</p>
                  <b>03-07-2026</b>
                </div>
                <div>
                  <p>Validity ( NT )</p>
                  <b>02-07-2036</b>
                </div>
                <div>
                  <p>Validity ( TR )</p>
                </div>
              </div>
            </div>
            <div className='photo-and-sign-container'>
              <img src="/images/seek-logo.png" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className='user-additional-info-container'>
            <div>
              <div><p>Name :</p></div>
              <div><h4>abc</h4></div>
              <div><p>Holder's Signature</p></div>
            </div>
            <div>
              <div><p>Date Of Birth :</p></div>
              <div><h4>123</h4></div>
              <div><p>Blood Group: <b>B+</b></p></div>
              <div><p>Organ Donor:</p></div>
            </div>
            <div>
              <div><p>Son/Daughter/wife of :</p></div>
              <div><h4>abcbkjgkg djd</h4></div>
            </div>
            <div>
              <div><p>Address :</p></div>
              <div>
                <p>abcdvvxvvvvsdfdfdsds gs dfndknks</p></div>
            </div>
          </div>
        </div>
        <div className='card-back-container'>
          <h4 className='licence-number-back'>DL No. BR33 20260024700</h4>
          <div className='qr-container'>
            <div className='qr-img-container'><img src="/images/qr.png" alt="" /></div>
            <div className='regn-and-validity-container'> 
              <p className='regn-number'>ADPVEH No.(Regn.Numbers)</p>
              <div>
                <p>Hazardous validity</p>
                <p>Hill Validity</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
