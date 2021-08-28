import React from 'react';
const BottomNav=()=>{
    return(
        <>
        <footer className="footerName">
                    <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <p className="mb-md-0 text-center">Copywrite 2020 @RipulAhuja</p>
               
                {/* <!-- Button trigger modal --> */}
<button type="button" className="Terms_btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Terms And Condition
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Terms And Condition</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      A Terms & Conditions document for a website is an agreement the website makes with its users about how to use the site properly, as well as the obligations and responsibilities of each party. Websites, especially commercial websites, have a portion of the site devoted to Terms & Conditions because it's the most important document for letting site users know what is expected of them. For owner/operators running any kind of business or personal website that allows user interaction, it's a good idea to have a clearly laid out document with all the Terms & Conditions required.

One of the primary functions of a Terms & Conditions document is to outline what will happen in a variety of different possible situations, including if the user breaks the rules and must have his/her account terminated. If the user goes in knowing what to expect, it is less likely that there will be problems between the user and the website down the road.

The Terms & Conditions document on any website creates a legally binding set of rules for the user, as well as, in most cases, the website owner. It's a place to set up expectations for each of the parties and ensure that the use of the website runs smoothly for both.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

 </div>
      </div>
      </div>
        
        </footer>
        
        
        </>
    );

};
export default BottomNav;