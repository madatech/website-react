import React, { Fragment } from 'react';
import AutomationItem from './AutomationItem';
import './Style.css';

function Automation() {
    return (
        <Fragment>
            <h2>Automation</h2>
            <div class="automation-panel">
                <p>
                    <center>
                        <b>
                            Take care of what's important.
                    <br />
                    Automate the rest.
                </b>
                    </center>
                </p>
                <p>
                    Streamline repetitive tasks and paperless processes with us—so you can focus your attention where it’s needed most.
        </p>
                <p>
                    Automation is the creation and application of technologies to produce and deliver goods and services with minimal human intervention. The implementation of automation technologies, techniques and processes improve the efficiency, reliability, and/or speed of many tasks that were previously performed by humans.
        </p>
                <p>
                    Automation is being used in a number of areas such as manufacturing, transport, utilities, defense, facilities, operations and lately, information technology.
        </p>
                <p>
                    Usually, automation is employed to minimize labor or to substitute humans in the most menial or repetitive tasks. Automation is present in virtually all verticals and niches, although it’s more prevalent in manufacturing, utilities, transportation, and security.
        </p>
                <p>
                    For example, most manufacturing plants make use of some automated process in the form of robotic assembly lines. Human input is required only to define the processes and supervise them, while the assembling of the various components is left to the machines, which automatically convert raw materials into finished goods.
        </p>
                <p>
                    In the technology domain, the impact of automation is increasing rapidly, both in the software/hardware and machine layer. The implementation of new artificial intelligence (AI) and machine learning (ML) technologies is currently skyrocketing the evolution of this field.
        </p>
                <div class="solutions">
                    <p>Top solutions for automating your jobs:</p>
                    <div class="gallery">
                        <ul>
                            <li><AutomationItem Title="Power Automate" ImgUrl="/img/powerautomate.png" /></li>
                            <li><AutomationItem Title="PowerApps" ImgUrl="/img/PowerApps.png" /></li>
                            <li><AutomationItem Title="Logic App" ImgUrl="/img/applogic.png" /></li>
                            <li><AutomationItem Title="Azure Functions" ImgUrl="/img/functions.jpg" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Automation;