import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CreateDevice = ({show,onHide}) => {
    const {device} = useContext(Context)
    const [info,setInfo] = useState([])
    const AddInfo = () =>{
        setInfo([...info,{title:"",description:"",number:Date.now()}])
    }
    const RemoveInfo=(number)=>{
        setInfo(info.filter(i=>i.number !== number))
    }
    return (
        <Modal
            size="lg"
            centered
            show = {show}
            onHide = {onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Устройствофывфыв
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-3"}>
                        <Dropdown.Toggle> Добавить тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                                <Dropdown.Item key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-3"}>
                        <Dropdown.Toggle> Добавить бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand=>
                                <Dropdown.Item key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите стоимость устройства"}
                        type="number"
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите файл устройства"}
                        type="file"
                    />
                    <hr/>
                    <Button variant={"outline-dark"} onClick={AddInfo}>Добавить новое свойство</Button>
                    {
                        info.map(i=>
                        <Row key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите название свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите значение свойства"}
                                />
                            </Col>
                            <Col>
                                <Button
                                    onClick={()=>RemoveInfo(i.number)}
                                    variant={"outline-danger"}>Удалить свойство</Button>
                            </Col>
                        </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Буу</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;