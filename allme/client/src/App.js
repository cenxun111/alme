import React, {useEffect} from 'react'
import "./App.css"
import Navbar from './components/header/Navbar'
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Redirect,
} from "react-router-dom";
// import PrivateRouter from './customPouter/PrivateRouter'
import Login from './auth/Login';
import Register from './auth/Register';
import Notfiy from './notify/Notfiy';
// import Notify from './auth/Notify';
import { useSelector,useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import Lay from "./Lay"
import Development from './Factory-center/branch/Development'
import MakeOne from './Factory-center/branch/MakeOne'
import MakeTwo from './Factory-center/Maketwo/MakeTwo'
import Management from './Factory-center/branch/Management'
import Purchase from './Factory-center/branch/Purchase'
import Sells from './Factory-center/branch/sells'
import NewsUpdate from './update/NewsUpdate'
import FactoryA from './Factory-center/FactoryA';
import Dispa from './profile/Dispa'

const App = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(refreshToken())
    },[dispatch])

    return (
       <Router>
             {/* <Notify /> */}
             <Navbar />
           <Switch>
             
               <Route exact path="/">
                  <Lay />  
               </Route>
               <Route path="/login">
               {!auth.token ?<Login/>: <Redirect to ="/"/>}
               {/* <Login/>  */}
               </Route>
               <Route path = "/register">
               {!auth.token ?<Register/>: <Redirect to ="/"/>}
               </Route>
               <Route path = "/notify">
                <Notfiy/>
               </Route>
               <Route exact path="/factorycenter">
                    <FactoryA />
                </Route>
               <Route path="/sells">
                    <Sells />
                </Route>
                <Route path='/factorycenter/purchase'><Purchase /></Route>
                <Route path='/management'><Management /></Route>
                <Route path='/factorycenter/maketwo'><MakeTwo /></Route>
                <Route path="/makeone"><MakeOne /></Route>
                <Route path='/factorycenter/development'><Development /></Route>
                <Route path='/newsupdate'><NewsUpdate/></Route>
                {/* <Route path='/dispa'></Route> */}
                <Route path='/:username'>
                <Dispa/>
                </Route>
               
           </Switch>
       </Router>
    )
}

export default App
