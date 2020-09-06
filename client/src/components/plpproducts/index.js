import React from "react";
import "./style.css";


function ProductListByCategory() {
    return (
    <>
    <h1>Here are all the products</h1>
    <div class="row row-cols-1 row-cols-md-4">
        
        <div class="col mb-4">
            <div class="card">
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default ProductListByCategory;

