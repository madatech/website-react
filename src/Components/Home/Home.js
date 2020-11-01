import React, { Fragment } from 'react';
import './Style.css';

function Home() {
    return (
        <Fragment>
            <div class="home-greeting">
                <img class="home-logo" src="/img/LogoWhite.png" alt='madatech brand icon' />

                <p class="home-slogan">Improving Environment, Improves Productivity!</p>

                <hr />

                <h1>Welcome to Madatech!</h1>

                <br />

                <h3>We are Productivity Advocate and Productivity Solutions Provider!</h3>

                <br />

                <h4>Check out what is Productivity</h4>

                <a class="btn-link" href="productivity">
                    <span class="oi oi-heart" aria-hidden="true"></span> Productivity
        </a>

                <h4>Check out how Cloud technologies and Automation can empower your organization</h4>

                <a class="btn-link" href="cloud">
                    <span class="oi oi-cloud" aria-hidden="true"></span> Cloud
        </a>
                <a class="btn-link" href="automation">
                    <span class="oi oi-loop-circular" aria-hidden="true"></span> Automation
        </a>

                <h4>Check out what other products and services we got for you</h4>

                <a class="btn-link" href="products">
                    <span class="oi oi-list-rich" aria-hidden="true"></span> Products
        </a>
                <a class="btn-link" href="services">
                    <span class="oi oi-puzzle-piece" aria-hidden="true"></span> Services
        </a>

            </div>
        </Fragment>
    );
}

export default Home;