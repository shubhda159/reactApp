import React from"react";
const textStyle={
    textAlign:"center",
    color:"black",
    fontFamily:"cursive", 
    fontSize:"22px",
    marginTop:"25px"
};
export default function Feedback(){
    return(
<div className="container">
<h2 style={textStyle}>FEEDBACK</h2>
<p style={textStyle}> Your Feedback is valuable to us</p>
<form className="row g-3">
<div className="col-md-6">
    <label for="inputZip" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
 
  <div className="col-12">
    <label for="inputSubject" className="form-label">Subject</label>
    <input type="text" className="form-control" id="inputSubject"/>
  </div>
  <div className="col-12">
    <label for="inputMsg" className="form-label">Message</label>
    <textarea id="inputMsg" className="form-control"></textarea>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-dark btn-outline-danger col-2 d-grid  mx-auto">Send Message</button>
  </div>
</form>
</div>
    );
}