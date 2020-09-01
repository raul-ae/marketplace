import React from "react";

function footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top" fixed="bottom" sticky="bottom">
        <div className="row">
            <div className="col-12 col-md">
                <img className="mb-6" src="../../Images/logo.png" alt="" width="24" height="24"></img>
                <small className="d-block mb-6 text-muted">© 2020</small>
            </div>
        </div>
    </footer>
  );
}

export default footer;
