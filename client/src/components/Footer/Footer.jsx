import React from 'react'
import { FaEnvelope, FaLocationArrow, FaMobile } from 'react-icons/fa'
// import Payment from "../../assets/payments.png"
import "./Footer.scss"
export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem sint rerum odio, vero deleniti culpa odit architecto nobis repudiandae. Nostrum exercitationem consectetur saepe aperiam tenetur tempora delectus dolor aliquam.</div>
        </div>
        <div className="col">
           <div className="title">Contact</div>
        <div className="c-item">
       <FaLocationArrow/>
       <div className="text"> Badda  Dhaka 1230 Banglades</div>
        </div>
        <div className="c-item">
       <FaMobile/>
       <div className="text">Phone: +8801778821588</div>
        </div>
        <div className="c-item">
       <FaEnvelope/>
       <div className="text">Email: hanif.mia2233@gmail.com</div>
        </div>
        </div>
        <div className="col">
           <div className="title">Catergories</div>
           <span className="text">Headphones</span>
           <span className="text">Smart Watches</span>
           <span className="text">Bluetooth Speaker</span>
           <span className="text">Earbuds</span>
           <span className="text">Homne Theatre</span>
           <span className="text">Projectors</span>
           </div>
        <div className="col">
           <div className="title">Pages</div>
        <span className="text">Home</span>
           <span className="text">About</span>
           <span className="text">Categories</span>
           <span className="text">Newsletter</span>
           <span className="text">Contact</span>
           <span className="text">Terms And Conditions</span>
        </div>
      </div>
      <d className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">FsDevStore 2023 CRATED BY FOYSAL PREMIUM E-COMMERCE SOLUTIONS BD.</div>
          {/* <img src={Payment} alt="" /> */}
        </div>
      </d>
    </footer>
  )
}
