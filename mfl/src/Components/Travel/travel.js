import React from "react";
import './_travel.scss';
import Flights from './flights'
import Hotels from './hotels'
import Holidays from './holidays'
import { commonServices } from "../../Utility/common.services";
import { Tab, Tabs } from 'react-bootstrap';

function Travel(props) {
    const images = commonServices.importImage(require.context('../../Assets/Icons/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="travel_div">
            {/* <div className=""> */}
                <Tabs
                    defaultActiveKey="flight"
                    transition={false}
                    id="travel_opt"
                    className="travel_option"
                >
                    <Tab eventKey="flight" title="Flights">
                        <Flights />
                    </Tab>
                    <Tab eventKey="hotel" title="Hotels" >
                        <Hotels />
                    </Tab>
                    <Tab eventKey="holiday" title="Holidays" >
                        <Holidays />
                    </Tab>
                </Tabs>
            {/* </div> */}
        </div>
    )
}
export default Travel;
