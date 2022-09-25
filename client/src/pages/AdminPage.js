import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const AdminPage = () => {
    const [brandVisible,setBrandVisible] = useState(false)
    const [typeVisible,setTypeVisible] = useState(false)
    const [deviceVisible,setDeviceVisible] = useState(false)
    return (
        <Container className={"d-flex flex-column"}>
            <Button onClick={()=>setBrandVisible(true)} variant={"outline-dark"}>Добавить бренд</Button>
            <Button onClick={()=>setTypeVisible(true)} variant={"outline-dark"}>Добавить тип</Button>
            <Button onClick={()=>setDeviceVisible(true)} variant={"outline-dark"}>Добавить устройство</Button>

            <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>

        </Container>

    );
};

export default AdminPage;