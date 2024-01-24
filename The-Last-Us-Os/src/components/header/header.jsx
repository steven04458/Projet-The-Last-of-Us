import { useState } from 'react'
import { Link } from "react-router-dom";
import compteLogo from '../../assets/images/compte.png'
import './header.css'
import "../../index.css"

function HeaderPage() {

  return (
    <>
        <header className="header-page columnContainer">
            <div className='header-container rowContainer'>
              <div className='header-titre columnContainer'>
                <h1>THE LAST OF US.</h1>
                <h2>Part I</h2>
              </div>
              <Link className='compteLogo' to={"/Home"}>
                <img src={compteLogo} />
              </Link>
            </div>
            <div className="separator"></div>
        </header>
    </>
  )
}

export default HeaderPage;
