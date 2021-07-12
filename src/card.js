import React from 'react';
 
export default function Card(props){
    
    return(
      <>
      <div className="container"> 
      <h2 style={{textAlign:"center",color:"black",fontFamily:"cursive"}}>DEALS OF THE DAY</h2>
    <div className="row">
    <div className="col-sm-3">
      <div className="card border-danger">
        <div className="card-body">
        <img src={props.imgsrc1} className="card-img-top" alt="..."/>
        <p className="card-text">{props.title1}</p>
           <a href="#" className="btn btn-primary">BUY</a>
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card border-danger">
        <div className="card-body">
        <img src={props.imgsrc2} className="card-img-top" alt="..."/>
        <p className="card-text">{props.title2}</p>
         <a href="#" className="btn btn-primary">BUY</a>
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card border-danger">
        <div className="card-body">
        <img src={props.imgsrc3} className="card-img-top" alt="..."/>
        <p className="card-text">{props.title3}</p>
        <a href="#" className="btn btn-primary">BUY</a>
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card border-danger">
        <div className="card-body">
        <img src={props.imgsrc4} className="card-img-top" alt="..."/>
        <p className="card-text">{props.title4}</p>
        <a href="#" className="btn btn-primary">BUY</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>);
    }