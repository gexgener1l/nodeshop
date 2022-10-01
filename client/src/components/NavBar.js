import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, AUTH_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom"

const NavBar = observer(() =>
{
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut=()=>{
        user.setUser({})
        user.setIsAuth(false)

    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>shop</NavLink>

                    {user.isAuth ?
                        <Nav className="m-0" style={{color:"white"}}>
                        <Button variant={"outline-light"} onClick={()=>logOut()} className={"m-lg-2"}> Выйти</Button>
                        <Button variant={"outline-light"} onClick={()=>navigate(ADMIN_ROUTE)} className={"m-lg-2"}>Админ панель</Button>
                        </Nav>
                    :
                        <Nav className="m-lg-auto" style={{color:"white"}}>
                            <Button variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>

                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;