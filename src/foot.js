import React from 'react';
const ull={
    listStyle: "none",
    cursor :"pointer"
};
const textStyle={
    color:"brown",
    marginTop:"45px",
    padding : "9px",
    fontWeight :"bold"
};
 export default function Foot(){
     return(
         <>
          <div className="container">
        <div className="row">
            <div className="col-sm-3">
                <ul style={ull}>
                    <h4 style={textStyle}>MissionED</h4>
                <li>Affiliated with Atal Incubation Center
                    Goa Institute of Management
                    India</li>
                    <li><p>Email: missionediit@gmail.com</p></li>
              
              </ul>
            </div>
            <div className="col-sm-3">
                <ul style={ull}>
                    <h4 style={textStyle}>Useful Links</h4>
                    <li>Home</li>
                    <li >Abut Us</li>
                    <li >Services</li>
                    <li >Careers</li>
                    <li >Terms of Services</li>
                    <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col-sm-3">
                <ul style={ull}>
                    <h4 style={textStyle}>Our Services</h4>
                <li >MissionEd Store</li>
                <li >MissionEd School</li>
                <li >MissionEd classNamees (School)</li>
                <li >MissionEd Referral</li>
                <li >MissionEd Pro <span className="badge bg-dark text-danger">New</span></li>
              </ul>
            </div>
            <div className="col-sm-3">
                <ul style={ull}>
                    <h4 style={textStyle}>Our Social Network</h4>
            
                <li >MissionEd Store</li>
                <li >MissionEd School</li>
                <li >MissionEd classNamees (School)</li>
                <li >MissionEd Referral</li>
                <li >MissionEd Referral</li>
              </ul>
            </div>
        </div>
    </div>
         </>
     );
 }