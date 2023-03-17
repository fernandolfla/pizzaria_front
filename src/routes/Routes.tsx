import { BrowserRouter, Route, Routes as AppRoutes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes;