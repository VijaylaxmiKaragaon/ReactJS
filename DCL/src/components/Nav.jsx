import React from "react";
import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="header">
        <div className="right">
          <h1>“What we PROMISE is what we DELIVER”</h1>
        </div>
        <div className="left">
          <a id="btn">Branches: Bangalore</a>
          <button>BTM Layout <br /> +91 8904080070</button>
          <button>Yelahanka <br /> +91 9071010044</button>
          <button>Rajajinagar <br />+91 8861908889</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
