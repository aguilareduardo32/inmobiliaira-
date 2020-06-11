import React from "react";
import Background from "../../images/real-estate.jpg";
import { Link } from "react-router-dom";
import "./first.css";

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  minHeight: "45vw",
  margin: "0",
  color: "black",
};

const First = () => {
  return (
    <div className="servicios2" style={sectionStyle}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-6">
          <Link to="/informesComRen">
            {" "}
            <div className="firstBox">
              <h1>
                COMPRAR <br />O <br />
                RENTAR <br />
                UN <br />
                INMUEBLE
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/informesVenta">
            {" "}
            <div className="firstBox">
              <h1>
                VENDER <br />O <br />
                ARRENDAR <br />
                UN <br />
                INMUEBLE
              </h1>
            </div>
          </Link>
        </div>
      </div>
      {/* <br />

      <div>
        <Link to="/informesComRen">
          {" "}
          <div className="first uno">
            <h1>COMPRAR O RENTAR UN INMUEBLE</h1>
          </div>
        </Link>
        <Link to="/informesVenta">
          {" "}
          <div className="first">
            <h1>VENDER O ARRENDAR UN INMUEBLE</h1>
          </div>
        </Link>
      </div> */}
    </div>
  );
};
export default First;
