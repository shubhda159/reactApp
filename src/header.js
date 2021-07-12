import React from 'react'
export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="#">MISSIONED</a>
          
         
            <form className="d-flex">
              <button className="btn btn-outline-danger me-6" type="submit">LOGIN</button>
            </form>
          </div>
       
      </nav>
    )
}
