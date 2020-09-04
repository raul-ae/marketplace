import React from "react";
import "./style.css";

function footer() {
    return (
        <footer className="pt-4 pt-md-5 border-top ftr">
            <div className="row">
                <div className="col-3 text-center float">
                    <img className="" src="../../Images/logo_small_icon_only_inverted.png" alt="" width="50" height="50"></img>
                    <small className="d-block link">© The Market 2020</small>
                </div>
                <div className="col-3 mx-auto">
                    <h5>Categories</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Sellers</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                        <li><a className="link" href="#">Link</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default footer;
