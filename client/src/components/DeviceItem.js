import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/free-png.ru-10.png"
const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width:150, cursor:"pointer"}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className={"d-flex justify-content-between align-items-center"}>
                    <div>Brand</div>
                    <div className={"d-flex"}>
                        <div>{device.rating}</div>
                        <Image width={25} height={25} src={star}/>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;