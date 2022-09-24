import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>shop</NavLink>

                    {user.isAuth ?
                        <Nav className="m-0" style={{color:"white"}}>
                        <Button variant={"outline-light"}>Выйти</Button>
                        <Button variant={"outline-light"} className={"m-lg-2"}>Админ панель</Button>
                        </Nav>
                    :
                        <Nav className="m-lg-auto" style={{color:"white"}}>
                            <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>

                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;