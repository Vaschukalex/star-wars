import React from "react";
import { Link } from "react-router-dom";
const Page404 = () => {

    return (
        <div className="page404_wrapper">
         <h1>404</h1>
         <h1>Oops, page not found!</h1>
         <Link to="/"><button type="button" className="btn btn-warning">Go home</button></Link>
         
       </div>
    )
}
export default Page404;