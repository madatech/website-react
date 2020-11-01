import React, { Fragment } from 'react';
import './Style.css';

function ProductItem(props) {
    return (
        <Fragment>
            <div class="product-item">
                <img class="product-icon" src={props.img} alt="" />
                <h4 class="product-title">{props.title}</h4>
            </div>
        </Fragment>
    );
}

export default ProductItem;