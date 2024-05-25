import { BrowserRouter,Route,Routes } from "react-router-dom"
// import Findcoder from "./component/Findcoder"
// import Explore from "./component/Explore"
// import Hire from "./component/Hire"
// import Dev from "./component/Dev"
// import Challenges from "./component/Challenges"

import Create_user from "./crud/Create_user"
import Crud from "./crud/Crud"
import Users from "./crud/Users"
import EditUser from "./crud/EditUser"


const App=()=>{
    return(
        <div>            
         
          <BrowserRouter>
          <Crud/>
                <Routes>
                    <Route element={<Create_user/>} path="/Create_user"/>
                    <Route element={<Users/>} path="/user"/>
                    <Route element={<EditUser/>} path="/edit/:abc"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App








 {/* <BrowserRouter>
            <Findcoder/>
            <Routes>               
                <Route element={<Explore/>} path="/explore"/>
                <Route element={<Hire/>} path="/hire"/>
                <Route element={<Dev/>} path="/dev"/>
                <Route element={<Challenges/>} path="/challenges"/>
            </Routes>
           </BrowserRouter> */}