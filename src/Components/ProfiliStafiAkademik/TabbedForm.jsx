import React, { useState } from "react";
import "../Transkripta/Style.css";
import pic from "../Assets/ubt-logo-1.png";
import DropdownPozita from "./DropDownPozita";

const TabbedForm = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Informatat Personale
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "pozita" ? "active" : ""}`}
            onClick={() => setActiveTab("pozita")}
          >
            Pozita dhe Roli
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "puna" ? "active" : ""}`}
            onClick={() => setActiveTab("puna")}
          >
            Informacionet e punes
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "photo" ? "active" : ""}`}
            onClick={() => setActiveTab("photo")}
          >
            Foto
          </button>
        </li>
      </ul>

      <form className="mt-3">
        {activeTab === "info" && (
          <>
            <div className="form-row mb-2">
              <label className="form-label custom-label">ID e Stafit</label>
              <input
                type="text"
                className="form-control form-control-sm custom-input"
                value="232470243"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Emri</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="Blerim"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Mbiemri</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="Zylfiu"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Data e Lindjes</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="10-10-1990"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Email</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="blerim.zylfiu@ubt-uni.net"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Numri i telefonit</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="+383 44 222 222"
                readOnly
              />
            </div>
          </>
        )}

        {activeTab === "pozita" && (
          <>
           <div className="form-row mb-2">
              <label className="form-label custom-label">Roli</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="Profesor"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Departamenti</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="Shkenca Kompjuterike"
                readOnly
              />
            </div>
          </>
        )}

        {activeTab === "puna" && (
          <>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Data e fillimit</label>
              <input
                type="text"
                className="form-control form-control-sm custom-input"
                value="10/10/2010"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Kontrata</label>
              <input
                type="text"
                className="form-control form-control-sm custom-input"
                value="e përhershme"
                readOnly
              />
            </div>
          </>
        )}

        {activeTab === "photo" && (
          <>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Foto</label>
              <img
                src={pic}
                alt="Foto e Staffit"
                className="rounded border"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default TabbedForm;
