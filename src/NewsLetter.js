import React from "react";
const textStyle = {
textAlign: "center",
color: "black",
fontFamily: "cursive",
fontSize: "22px",
marginTop: "20px",
padding:"20px"
};
export default function NewsLetter() {
return (

<div className="container" style={{ background: "#F0F9FD"}}>
    <h2 style={textStyle}>JOIN OUR NEWSLETTER</h2>
    <p style={textStyle}> Enter your email here</p>
          <div class="input-group mb-3">
  <input type="text" class="form-control border-primary" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-danger btn-dark" type="button" id="button-addon2">Subscribe</button>
</div>
</div>


);
}