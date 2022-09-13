import React from "react";
function Form()
{
    return(
            <>
            <form method="post" className="was-validated">
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                    <div className="valid-feedback">Correct Email</div>
                    <div className="invalid-feedback">Please enter your Email</div>
                </div>
                <div className="mb-3" style={{width:"400px"}}>
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                    <div className="valid-feedback">Correct pasword</div>
                    <div className="invalid-feedback">Please enter your password</div>
                </div>
                <div className="form-check mb-3" style={{width:"400px"}}>
                    <label for="remember" className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" required/> Do you agree to our terms and condition?
                    <div className="valid-feedback">Thankyou for agreeing our terms and conditions</div>
                    <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                    </label>
                </div>
                
            <button type="submit" className="btn btn-info">Submit</button>
            </form>
            <br/><br/><br/>

            <form method="post" className="was-validated">
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="bride" className="form-label">Bride's Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" required/>
                    <div className="invalid-feedback">Please enter your name</div>

                </div>
                
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="groom" className="form-label">Groom's Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" required/>
                    <div className="invalid-feedback">Please enter your name</div>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="bride" className="form label">Bride's Date of Birth:</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" required/>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="groom" className="form label">Groom's Date of Birth:</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" required/>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="marriage" className="form-label">Marriage Date:</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" required/>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="place" className="form-label">Place of marriage:</label>
                    <input type="place" className="form-control" id="place" placeholder="Enter place" name="place" required/>
                    <div className="invalid-feedback">Please enter place</div>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="address" className="form-label">Address:</label>
                    <textarea cols="30" rows="4" className="form-control" id="address" placeholder="Enter address" name="address" required/>
                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="state" className="form-label">State:</label>
                    <input type="state" className="form-control" id="state" placeholder="Enter state" name="state" required/>
                    <div className="invalid-feedback">Please enter state</div>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="country" className="form-label">Country:</label>
                    <input type="state" className="form-control" id="state" placeholder="Enter country" name="country" required/>
                    <div className="invalid-feedback">Please enter country</div>
                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="number" className="form-label">Registration number:</label>
                    <input type="number" className="form-control" id="number" placeholder="Enter registration number" name="number" required/>
                    <div className="invalid-feedback">Please enter your registration number</div>

                </div>

                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="mobile" className="form-label">Mobile number:</label>
                    <input type="mobile" className="form-control" id="mobile" placeholder="Enter mobile number" name="mobile" required/>
                    <div className="invalid-feedback">Please enter your mobile number</div>

                </div>
                
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="religion" className="form-label">Religion:</label>
                    <input type="religion" className="form-control" id="religion" placeholder="Enter your religion" name="religion" required/>

                </div>

                <div className="mb-3 mt-3">
                    <label for="upload" className="form-label">Upload Image</label>
                    <td><input type="file" name="Imageupload" accept="Image/*"></input></td>

                </div>
                <div className="form-check mb-3" style={{width:"400px"}}>
                    <label for="remember" className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" required/> Do you agree to our terms and condition?
                    <div className="valid-feedback">Thankyou for agreeing our terms and conditions</div>
                    <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                    </label>
                </div>

                <button type="submit" className="btn btn-info">Submit</button><button type="Reset" className="btn btn-danger">Reset</button>

            </form>
            <br/><br/><br/>

            <form method="post" className="was validated">
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="bride" className="form-label">Student's Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" required/>
                    <div className="invalid-feedback">Please enter your name</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="bride" className="form-label">Date of birth</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" required/>
                    <div className="invalid-feedback">Please enter date</div>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="email" className="form-label">Email ID</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter id" name="email" required/>
                    <div className="invalid feedback">Please enter id</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="number" className="form-label">Mobile number</label>
                    <input type="number" className="form-control" id="number" placeholder="Enter phone number" name="number" required/>
                    <div className="invalid-feedback">Please enter number</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="gender" className="form-label">Gender</label>
                    <input type="gender" className="form-control" id="gender" placeholder="Enter gender" name="gender" required/>
                    <div className="invalid-feedback">Please enter gender</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="address" className="form-label">Address:</label>
                    <textarea cols="30" rows="4" className="form-control" id="address" placeholder="Enter address" name="address" required/>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="city" className="form-label">City</label>
                    <input type="city" className="form-control" id="gender" placeholder="Enter city" name="city" required/>
                    <div className="invalid-feedback">Enter city</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="password" className="form-label">Pincode</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter pincode" name="pincode" required/>
                    <div className="invalid-feedback">Enter pincode</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="state" className="form-label">State</label>
                    <input type="state" className="form-control" id="state" placeholder="Enter state" name="state" required/>
                    <div className="invalid-feedback">Enter state</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="country" className="form-label">Country</label>
                    <input type="country" className="form-control" id="country" placeholder="Enter county" name="country" required/>
                    <div className="invalid-feedback">Enter country</div>

                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="hobby" className="form-label">Hobby</label>
                    <input type="hobby" className="form-control" id="hobby" placeholder="Enter your favourite hobby" name="hobby" required/>
                    <div className="invalid-feedback">Enter favourite hobby</div>

                </div>


            </form>
        </>
    )
}
export default Form;
