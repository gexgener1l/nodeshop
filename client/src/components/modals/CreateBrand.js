import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {Form} from "react-bootstrap";

const CreateBrand = ({show,onHide}) => {
    return (
        <Modal
            size="lg"
            centered
            show = {show}
            onHide = {onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите бренд"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;