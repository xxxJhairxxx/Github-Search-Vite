import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Usersresults from "../pages/usersresults"
import Repositories from "../pages/repositories"
import Userresult from "../pages/userresult"



export const Router = () => {
    

    return (  
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/:name" element={<Usersresults />} /> 
                    <Route path="/user/:userName" element={<Userresult />}/>
                    <Route path="/repos/:userName/:repositoriesInfo" element={<Repositories />}/>
                </Routes>
    )
}
