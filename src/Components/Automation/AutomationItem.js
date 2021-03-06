import React, { Fragment } from 'react';
import './Style.css';

function AutomationItem(props) {
    return (
        <Fragment>
            <div class="automation-item">
                <img src={props.ImgUrl} alt='automation tool icon' />
                <h4>{props.Title}</h4>
            </div>
        </Fragment>
    );
}

export default AutomationItem;