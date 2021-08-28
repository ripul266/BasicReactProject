import React from 'react';
const Contact =()=>{
return(
<>
<div className="container-fluid">
    <div className="row mt-5 p-lg-5">
        <div className="col-7 mx-auto">

        
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="+91XXXXXXXXXX" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="FirstName LastName" />
</div>
<button  type="submit" className="btn btn-primary ml4">Get Call Back</button>
</div>
    </div>
</div>

</>
);
};
export default Contact;