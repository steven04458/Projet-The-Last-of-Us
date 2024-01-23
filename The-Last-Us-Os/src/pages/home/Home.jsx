import { useState } from 'react'
import compteLogo from '../../assets/images/compte.png'
import LDEN from '../../assets/images/Le-dernier-d-entre-nous.jpg'
import Chap2Logo from "../../assets/images/Chapitre_zone_de_quarantaine.png"
import './Home.css'
import "../../index.css"
import HeaderPage from "../../components/header/header"

function Home() {
    const [activeForm, setActiveForm] = useState('chap1');
    const switchForm = (form) => {
        setActiveForm(form);
      };

  return (
    <>
        <HeaderPage></HeaderPage>
        <main className='home rowContainer alignCenter'>
            <div>
                <div className='header-content'>
                    <h2><span>Table</span> of content</h2>
                </div>
                <section>
                    <div className='indexes'>
                        <button type='button' onClick={() => switchForm('chap1')}>01</button>
                        <button type='button' onClick={() => switchForm('chap2')}>02</button>
                    </div>
                    <div className='tabs'>
                        <div className={`form ${activeForm === 'chap1' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>Ville natale</h3>
                                    <p>En 2013, Joel avec sa fille Sarah, 
                                        aidé de son frère Tommy quitte sa maison à Austin pour fuir 
                                        la pandémie d'Infection Cérébrale par Cordyceps qui frappe la ville.</p>
                                    <button>Read More</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={LDEN}></img>
                                </div>
                            </div>
                        </div>
                        <div className={`form ${activeForm === 'chap2' ? 'is-active' : ''}`}>
                            <div className='tab'>
                                <article className='tab-content'>
                                    <h3>Zone de quarantaine</h3>
                                    <p>20 ans plus tard, Joel devenu un contrebandier intrépide fait la connaissance d'Ellie, 
                                        une petite fille qu'il va devoir escorter avec sa coéquipière Tess hors de la zone de quarantaine de Boston où il vit.</p>
                                    <button>Read More</button>
                                </article>
                                <div className='tab-image'>
                                    <img src={Chap2Logo}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}

export default Home;
