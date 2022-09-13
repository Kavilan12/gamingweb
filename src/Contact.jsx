import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
function Contact()
{
    return(
        <>
        <Navbar/>
        <Carousel/>
        <h1 className="text-primary">Contact</h1>
        <br/><br/><br/><br/>
        <h2 className="text-success">Get in touch with us</h2>
        <br/><br/>
           <form method="post" className="was validated">
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                <label for="f-name" className="form-label">First Name</label>
                <input type="name" className="form-control" id="name" placeholder="Enter your firstname name" name="name" required/>
                <div className="invalid-feedback">Please enter your first name</div>

            </div>
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                <label for="l-name" className="form-label">Last Name</label>
                <input type="name" className="form-control" id="name" placeholder="Enter your lastname name" name="name" required/>
                <div className="invalid-feedback">Please enter your last name</div>

            </div>
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="email" className="form-label">Email ID</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter id" name="email" required/>
                    <div className="invalid feedback"></div>

                </div>
                <label for="comment" className="form-label">Leave us your comments</label>
<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
<div>
<button type="submit" class="btn btn-primary">Submit</button>
</div>



           </form>

        </>
    )
}
export default Contact