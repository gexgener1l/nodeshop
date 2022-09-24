import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/free-png.ru-10.png"
import{useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{width:150, cursor:"pointer"}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className={"d-flex justify-content-between align-items-center"}>
                    <div className={"text-black-50"}>Brand</div>
                    <div className={"d-flex"}>
                        <div>{device.rating}</div>
                        <Image width={25} height={25} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;