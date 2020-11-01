import React, { Fragment } from 'react';
import './Style.css';
import data from '../../Data/products.json'
import ProductItem from './ProductItem';

function Products() {
    function getProducts() {
        return data.products.map(item => <li><ProductItem img={item.ImgUrl} title={item.Title} /></li>);
    }

    return (
        <Fragment>
            <div class="products">
                <h2>Products</h2>
                <h5>Here you can find the catalog of the products we offer to our clients!</h5>
                <div class="gallery">
                    <ul>
                        {!data.products ? <p><em>Loading...</em></p> :
                            getProducts()
                        }
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Products;