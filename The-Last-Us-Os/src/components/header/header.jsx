import { useState } from 'react'
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
              <div className='compteLogo'>
                <img src={compteLogo} />
              </div>
            </div>
            <div className="separator"></div>
        </header>
    </>
  )
}

export default HeaderPage;
