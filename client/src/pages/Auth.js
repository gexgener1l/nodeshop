import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {setUser,setIsAuth} from "../index"
import {useNavigate} from "react-router-dom"

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click =async ()=>{
        try{let data;
            if (isLogin){
                data = await login(email,password)
            }
            else{
                data = await registration(email,password)
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }
        catch(e){
            alert(e.response.data.message)
        }
        
    }

    
    return (
        
        <Container className={"d-flex justify-content-center align-items-center"}
        style={{height:window.innerHeight - 54}}>
            <Card style={{width: 600}} className={"p-5"}>
                <h2 className={"m-lg-auto"}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className={"d-flex flex-column"}>
                <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                            onClick={click}
                            variant={"outline-success"}>
                            {isLogin? 'войти':"Регистрация"}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;