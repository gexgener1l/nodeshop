import React from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink,useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className={"d-flex justify-content-center align-items-center"}
        style={{height:window.innerHeight - 54}}>
            <Card style={{width: 600}} className={"p-5"}>
                <h2 className={"m-lg-auto"}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className={"d-flex flex-column"}>
                    <FormControl
                    placeholder="Введите email"
                    />
                    <FormControl
                        placeholder="Введите password"
                    />
                    <Row className={"d-flex justify-content-between mt-3"}>
                        {isLogin?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зайти</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунта? <NavLink to={LOGIN_ROUTE}>войти</NavLink>
                            </div>
                        }

                        <Button
                            variant={"outline-success"}>
                            {isLogin? 'войти':"Рагистрация"}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;