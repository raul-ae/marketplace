import React from "react";
import "./style.css";


function ProductDetail({ productId, productName, description, price }) {
    return (
        <div>
            <div className="productheight">
                <h1>{productName}</h1>
                <div><h4>Description:{' '}</h4>
                    {description}
                </div>
                <div><h4>Price:{' '}</h4>
                    {`$${price} mxp`}
                </div>
            </div>
            <div className="align">
                <div className="col-6">Select: </div>
                <div className="col-6">
                    <form>
                        <div className="form-row align-items-right">
                            <div className="col-auto my-1 align-items-right">
                                <label className="mr-sm-2 sr-only" for="quantity">Preference</label>
                                <select className="custom-select mr-sm-2" id="quantity">
                                    <option selected>Quantity</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className="col-auto my-1 align-items-right">
                                <div type="submit" className="add" onClick={() => {
                                    localStorage.setItem(productId, document.querySelector('#quantity').value);
                                }}>Add</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
