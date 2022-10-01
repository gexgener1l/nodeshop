import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import {BrowserRouter} from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userAPI";


const App = observer(()=>{
  const {user} = useContext(Context)
  const [loading,setLoading] = useState(true);

 

  
  useEffect(()=>{
    setTimeout(()=>{
      try{
        console.log("123")
        check().then(data=>{
        user.setUser(true)
        user.setAuth(true)
        console.log("12333")
      }).finally(()=>setLoading(false))
      }
      catch(e){
        console.error(e.response.data);
      }
      
    },0)
    
    // .finally(()=>setLoading(false)
  },[])

  if(loading){
    return <Spinner animation="grow"/>
  }
  return (
    <BrowserRouter>
        <NavBar />
        <AppRouter />
    </BrowserRouter>
  );
})

export default App;
