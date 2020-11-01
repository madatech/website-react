import React, { Fragment } from 'react';
import './Style.css';

function Cloud() {
    return (
        <Fragment>
            <div class="cloud-computing">
                <h2>Cloud</h2>
                <h3>What is Cloud?</h3>
                <div class="block-right">
                    <p>
                        Simply put, cloud computing is the delivery of computing services—
                        including servers, storage, databases, networking, software, analytics,
                        and intelligence—over the Internet (“the cloud”) to offer faster
                        innovation, flexible resources, and economies of scale. You typically
                        pay only for cloud services you use, helping lower your operating costs,
                        run your infrastructure more efficiently and scale as your business needs change.
            </p>
                    <img src="img/cloud.jpg" />
                </div>
                <h3>Uses of cloud computing</h3>
                <div class="benefits">
                    <img src="img/cloud.png" />
                    <div class="panel">
                        <p>
                            You are probably using cloud computing right now, even if you don’t realise it.
                            If you use an online service to send email, edit documents, watch movies or TV,
                            listen to music, play games or store pictures and other files, it is likely that
                            cloud computing is making it all possible behind the scenes. The first cloud
                            computing services are barely a decade old, but already a variety of organisations—
                            from tiny startups to global corporations, government agencies to non-profits—are
                            embracing the technology for all sorts of reasons.
                </p>
                        <p>
                            Here are a few examples of what is possible today with cloud services from a cloud provider:
                </p>
                        <ul>
                            <li>
                                Create cloud-native applications
                    </li>
                            <li>
                                Store, back up and recover data
                    </li>
                            <li>
                                Test and build applications
                    </li>
                            <li>
                                Analyse data
                    </li>
                            <li>
                                Stream audio and video
                    </li>
                            <li>
                                Embed intelligence
                    </li>
                            <li>
                                Deliver software on demand
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Cloud;