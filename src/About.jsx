import React from 'react';
import { NavLink } from 'react-router-dom';
import header_img from "./Images/header.svg";
const About =()=>{
return(
<>
<div className="container-fluid">
         <div className="Row">
             <div className="col-10 mx-auto">
                 <div className="row">
                     <div class="col-md-6 mt-5 pt-5 order-2 order-lg-1">
                         <h1>Welcome To About Page <strong>RipulAhuja</strong></h1>
                         <h2 className="mt-3 mb-3">We Are Team Of Web Developer</h2>
                         <div className="mt-4">
                             <NavLink to="/contact" className="get_btn">CONTACT US</NavLink>
                         </div>
                     </div>
                     <div className="col-md-6 pt-2 mt-3 order-lg-2 order-1">
                       <img src={header_img} className="img-fluid animation_header"  alt="header_image" />

                     </div>
                 </div>
             </div>
         </div>

     </div>
</>
);
};
export default About;