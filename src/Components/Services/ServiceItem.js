import React, { Fragment } from 'react';
import './Style.css';

function ServiceItem(props) {
    return (
        <Fragment>
            <div class="service-item">
                <img class="service-icon" src={props.img} alt="" />
                <h4 class="service-title">{props.title}</h4>
            </div>
        </Fragment>
    );
}

export default ServiceItem;