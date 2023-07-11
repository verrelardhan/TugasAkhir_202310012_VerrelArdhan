import React from 'react'
import { NavLink } from 'react-router-dom';
import Bonanza from '../../../../Pertemuan4/assets/Bonanza.png'
import "../.././../layouts/components/headers/Header.css"

export default function HeaderNav() {
    const menuList = [{ id: 1, name: "Home", path: "/home", icon:"bi-house-fill" },
                      { id: 3, name: "Product", path: "/master-data", icon:"bi-box-seam-fill" },
                      { id: 5, name: "SparePart", path: "/sparepart", icon:"bi bi-tools" },
                      ];
    return (
        <header>
        <nav className="navbar navbar-expand-md fixed-top shadow inibg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src={Bonanza}
                alt="Bonanza-logo"
                style={{
                  height: "50px",
                  marginTop: "-6px",
                  marginRight: "10px",
                  textAlign: "center",
                  fontFamily:
                    "https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap",
                }}
              />
              <span style={{ color: "#dc143c", fontSize: "35px" }}>Bonanza</span>
              <span style={{ color: "white", fontSize: "35px" }}>Garage</span>
            </a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="d-flex w-100 justify-content-end">
                <div id="main-nav">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0 text-light">
                    {menuList.map((v, index) => (
                      <li className="nav-item me-1 btnall active" key={index}>
                        <NavLink
                          className="nav-link text-hover-success px-3 text-light"
                          to={v.path}
                        >
                          <i className={"bi me-2 fs-5 text-light " + v.icon}></i>
                          {v.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}