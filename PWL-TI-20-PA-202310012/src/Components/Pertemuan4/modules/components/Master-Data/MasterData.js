import React, { Component } from "react";
import Pilihan from "../Master-Data/modules/products/Pilihan"
import "./master.css"

export default class MasterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Products", link: "/master-data/products" },
      ],
    };
  }
  render() {
    return (
      <div style={{ marginTop : '6rem', }} id="master-data" className="container ">
      
        <div className="pilihan">
            <Pilihan />
        </div>
      </div>
    );
  }
}


