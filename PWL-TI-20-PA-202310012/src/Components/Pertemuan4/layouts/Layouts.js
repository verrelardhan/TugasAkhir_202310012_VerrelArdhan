import React from "react";
import Footers from "./components/footers/Footers";
import HeaderNav from "./components/headers/HeaderNav";
import "./layout.css";
import ModalPopUp from "./components/Modal/Modal_PopUp";

export default function Layouts(props) {
  return (
    <div class="bg" id="main-layout">
      <HeaderNav />

      <main className="py-5">
        {props.children}
      </main>

      <div className="foter">
        <Footers />
      </div>
      <ModalPopUp />
    </div>
  );
}
