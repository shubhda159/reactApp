import React from 'react';
const textStyle={
    color:"brown",
    fontFamily:"cursive", 
    fontSize:"35px",
    marginTop:"45px",
    padding : "9px",
    fontWeight :"bolder"
};

const textP={
    color:"black",
    fontFamily:"cursive", 
    fontSize:"35px",
    marginTop:"45px",
    padding : "9px",
};
export default function Head(){
    return(
        <div className="container">    
      <div className="row">
      <div className="col-sm-4">
      <h2 style={textStyle}>MISSIONED STORE</h2>
          <div className="card-body">
            <p className="card-text" style={textP}>The one stop shop for all students of India
Trusted by 2500+ students</p>
<div className="d-grid gap-4 col-6 mx-auto">
<a href="#" className="btn btn-dark btn-outline-danger">START SHOPPING</a>
<a href="#" className="btn btn-dark btn-outline-danger">MISSIONED PRO</a>
         
        </div>
        </div>
      </div>
      <div className="col-sm-8">
          <div className="card-body">
          <img src="/images/head.jpg" className="card-img-top" alt="..."/>
          </div>
      </div>
      </div>
      </div>

       
    );
}