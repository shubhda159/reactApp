import React from 'react';
const img ={
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width : "40%"
  };
  const textStyle={
    textAlign:"center",
    color:"black",
    fontFamily:"cursive", 
    fontSize:"22px",
    marginTop:"45px",
    padding : "9px",
    fontWeight :"bold"
};
export default function Section(props){
    return(
        <>
        <div className="container">
        <h2 style={textStyle}>{props.title}</h2>
        <div> 
        <img src={props.img} alt="Referals" style={img}></img>
         </div> 
         <button type="submit" className="btn btn-primary  col-2 d-grid  mx-auto">{props.btn}</button>
   
        </div>
        </>
    );
}