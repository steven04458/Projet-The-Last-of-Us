import { useState } from 'react'
import compteLogo from '../../assets/images/compte.png'
import './header.css'
import "../../index.css"

function HeaderPage() {

  return (
    <>
        <header className="header-page columnContainer alignCenter">
            <div className='header-container columnContainer'>
                <h1>THE LAST OF US.</h1>
                <h2>Part I</h2>
            </div>
            <div className="separator"></div>
        </header>
    </>
  )
}

export default HeaderPage;
