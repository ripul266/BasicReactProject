import React from 'react';
import Card from './Card';
import header_img from "./Images/header.svg";
const Service =()=>{
return(
<>
<div className="my-5">
    <div className="text-center">
        <h1 className="bold">OUR SERVICES</h1>
    
    <div className="row">
        <div className="col-10 mx-auto disp_card">
          <div className="row gy-2 p-2 m-2">
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
          <Card image={header_img} title="Hello Props" text="How are youu hope you are doing well My Name is  RipulAhuja!!!!"/>
              
          </div>
        </div>
    </div></div>
</div>
</>
);
};
export default Service;