import React, { useState } from "react";
import "../Transkripta/Style.css";
import pic from "../Assets/ubt-logo-1.png";

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
            className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Kontaktet
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
              <label className="form-label custom-label">ID e Studentit</label>
              <input
                type="text"
                className="form-control form-control-sm custom-input"
                value="232470227"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">Përdoruesi</label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="ta70227@ubt-uni.net"
                readOnly
              />
            </div>
          </>
        )}

        {activeTab === "contact" && (
          <>
            <div className="form-row mb-2">
              <label className="form-label custom-label">
                Numri i Telefonit
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-input"
                value="+383 44 000 000"
                readOnly
              />
            </div>
            <div className="form-row mb-2">
              <label className="form-label custom-label">
                Email Alternativ
              </label>
              <input
                type="email"
                className="form-control form-control-sm custom-input"
                value="example@gmail.com"
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
                alt="Foto e Studentit"
                className="rounded border"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  // marginLeft: "10px",
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
