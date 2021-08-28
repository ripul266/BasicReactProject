import React from 'react';

import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    return(
        <>
         <div className="card m-1 border-0">
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <NavLink to="" className="btn  get_btn">Get Through</NavLink>
  </div>
</div>
        
        </>
    );
};
export default Card;