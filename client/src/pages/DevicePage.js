import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import BigStar from "../assets/free-png.ru-10.png"

const DevicePage = () => {
    const device ={id:1,name:"iphone 5",price:300,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"}
    const description = [
        {id:1,title:"Оперативная память", description:"4gb"},
        {id:2, title:"Камера",description:"48mp"},
        {id:3,title:"процессор",description: "m1"},
    ]
        return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex align-items-center flex-column"}>
                        <h2>{device.name}</h2>
                        <div
                            className={"d-flex align-items-center justify-content-center"}
                            style={{background: `url(${BigStar}) no-repeat center center`, width:240,height:240,backgroundSize:"cover",fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} $</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h1>Характеристики</h1>
                {description.map((info,index) =>
                    <Row key={info.id} style={{background: index % 2 ===0 ? "lightgrey" : "darkgrey"}}>
                        {info.title}:{info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;