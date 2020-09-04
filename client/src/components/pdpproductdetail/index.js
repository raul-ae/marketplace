import React from "react";
import "./style.css";


function ProductDetail() {
    return (
        <div>
            <div className="productheight">
                <h1>Product title</h1>
                <div>Product description:
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            </div>
            <div className="align">
                <div className="col-6">Select: </div>
                <div className="col-6">
                    <form>
                        <div class="form-row align-items-right">
                            <div class="col-auto my-1 align-items-right">
                                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
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
                            <div class="col-auto my-1 align-items-right">
                                <div type="submit" class="add">Add</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
