import React, { Fragment } from 'react';
import './Style.css';
import data from '../../Data/products.json'
import ServiceItem from './ServiceItem';

function Services() {
    function getServices() {
        return data.services.map(item => <li><ServiceItem img={item.ImgUrl} title={item.Title} /></li>);
    }

    return (
        <Fragment>
            <div class="services">
                <h2>Services</h2>
                <h5>Here you can find the catalog of our services!</h5>
                <div class="gallery">
                    <ul>
                        {!data.services ? <p><em>Loading...</em></p> :
                            getServices()
                        }
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Services;