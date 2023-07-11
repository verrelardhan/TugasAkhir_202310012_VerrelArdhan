import React, { Component } from "react";

import "../Homes/Home.css";
import project from "../../../assets/repair.png";
import welding from "../../../assets/Welding.png";
import painting from "../../../assets/painting.png";
import whatsapp from "../../../assets/Whatsapp_logo.svg.png";
import Gmail from "../../../assets/gmail logo.png";
import insta from "../../../assets/Instagram Logo.png";

export default class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "7rem" }} className="container">
        <h1 class="text-center">Service</h1>

        <div class="pawal">
          <div className="row ">
            <div className="col semua">
              <img src={project} alt="lll" className="pct1"></img>
            </div>

            <div className="col">
              <img src={welding} alt="lll" className="pct1"></img>
            </div>

            <div className="col">
              <img src={painting} alt="lll" className="pct1"></img>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <h1 className="text-center">About Us</h1>
          <p className="text-center isi">
            Bengkel Bonanza adalah bengkel otomotif yang berkomitmen untuk
            memberikan pelayanan berkualitas tinggi kepada pelanggan dengan
            profesionalisme dan kepuasan yang tinggi. Kami memiliki reputasi
            yang solid dalam industri ini dan telah melayani pelanggan setia
            sejak pendirian kami.
          </p>
        </div>

        <div className="container text-center ini">
          {/* <h1 className="text-center">Contact Us</h1> */}
          <p className="text-center Contact">
           HUBUNGI KAMI DENGAN SOCIAL MEDIA DIBAWAH INI
          </p>
        </div>

        <div class="row row-cols-4 row-cols-md-3 g-4 pcontact ">
          <div class="col kotak">
            <div class="card h-100 k1">
              <a href="https://www.instagram.com/bonanzagarage/">
                <img src={insta} class="card-img-top" alt="..." />
              </a>
            </div>
          </div>

          <div class="col kotak">
            <div class="card h-100 k1">
              <a href="https://api.whatsapp.com/send/?phone=0895331115758&text&type=phone_number&app_absent=0">
                <img src={whatsapp} class="card-img-top" alt="..." />
              </a>
            </div>
          </div>

          <div class="col kotak">
            <div class="card h-100 k1">
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <img src={Gmail} class="card-img-top" alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <div class="pawall">
// <div className="row ">
//   <div className="col semua">
//     <img src={whatsapp} alt="lll" className="pct2"></img>
//   </div>

//   <div className="col">
//     <img src={Gmail} alt="lll" className="pct2"></img>
//   </div>

//   <div className="col">
//     <img src={insta} alt="lll" className="pct2"></img>
//   </div>
// </div>
// </div>

//  <div class="container text-center">
//   <div class="row bol">
//     <img src={insta} class="col "/>
//     <img src={insta} class="col "/>
//     <img src={insta} class="col "/>
//   </div>
// </div>
